var SERVICE_URL = process.env.SERVICE_URL ? process.env.SERVICE_URL : "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/executor";


var BUCKET = process.env.BUCKET ? process.env.BUCKET : "cegielskir";
var PATH = process.env.PATH ? process.env.PATH : "montageV2_6-0.35"; //prefix in a bucket with no leading or trailing slashes

exports.service_url = SERVICE_URL;
exports.S3_metrics = false || true;

exports.options = {
    "bucket": "cegielskir",
    "prefix": "montageV2_6-0.35"
};

