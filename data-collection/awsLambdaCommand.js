const request = require('requestretry');
const executorConfig = require('./awsLambdaCommand.config.js');
const identity = function (e) {return e};

function retryStrategy(err, response, body) {
    return err || response.statusCode >= 400 || request.RetryStrategies.HTTPOrNetworkError(err, response);
}

function awsLambdaCommand(ins, outs, config, options) {

    config = JSON.parse(config)
    ins = JSON.parse(ins)
    outs = JSON.parse(outs)
    options = JSON.parse(options)
    
    let executable = config.executor.executable;
    let jobMessage = {
        "executable": executable,
        "args": config.executor.args,
        "env": (config.executor.env || {}),
        "inputs": ins.map(i => i),
        "outputs": outs.map(o => o),
        "options": options
    };

    console.log("Executing:  " + JSON.stringify(jobMessage));
    const fireTime = Date.now();

    let functionType = config.deploymentType ? config.deploymentType : executorConfig.functionType;
    let url = executorConfig.resources[functionType];

    request.post({
        timeout: 900000000,
        url: url,
        json: jobMessage,
        retryStrategy: retry,
        headers: {'Content-Type': 'application/json', 'Accept': '*/*'}
    })
        .then(async function (response) {
            if (response) {
                console.log("Function: " + executable + " response status code: " + response.statusCode + " number of request attempts: " + response.attempts)
                if (response.statusCode !== 200) {
                    console.log(response.body)
                }
            }
            if (config.S3_metrics) {
                await waitForLogs(1)
            } else {
                console.log("Metrics: task: " + executable + " fire time " + fireTime + " " + response.body);
            }
            console.log("Lambda task: " + executable + " completed successfully.");
        })
        .catch(function (error) {
            console.log("Function: " + executable + " error: " + error);
        });

    async function waitForLogs(retry) {
        if ((retry * s3LogCheckRetryFrequency) / 1000 > 900) { // lambda can execute up to 900 seconds
            console.log("Error - waiting over 15 minutes. Terminating.");
        }
        await getS3Logs()
            .catch(() => {
                return sleep(s3LogCheckRetryFrequency)
                    .then(waitForLogs.bind(null, retry + 1));
            });
    }

    async function getS3Logs() {
        const params = {
            Bucket: options.bucket,
            Key: "logs/" + logName
        };
        await s3.getObject(params).promise().then(async function (data) {
            console.log("Metrics: task: " + config.name + " fire time " + fireTime + " " + data.Body.toString());
        });
    }
    
    function retry(err, response) {
        if (response === undefined) {
            return true;
        }
            if (response.statusCode === 502 || response.statusCode === 400 || response.statusCode === 500) {
                console.log("Error: " + err + ", retrying " + executable);
                return true;
            }
            if (response.statusCode === 504) {
                console.log(executable + " timeout!")
            }
            return false;
    }
}


exports.awsLambdaCommand = awsLambdaCommand;
const args = process.argv
awsLambdaCommand(args[2], args[3], args[4], args[5]);
