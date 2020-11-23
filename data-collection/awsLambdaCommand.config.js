const FUNCTION_TYPE = process.env.FUNCTION_TYPE ? process.env.FUNCTION_TYPE : "1536";

exports.functionType = FUNCTION_TYPE;


var AWS_BUCKET = process.env.BUCKET ? process.env.BUCKET : "cegielskir";
var AWS_PATH = process.env.PATH ? process.env.PATH : "montageV2_6-0.35"; //prefix in a bucket with no leading or trailing slashes

exports.S3_metrics = false || true;

exports.options = {
    "bucket": "cegielskir",
    "prefix": "montageV2_6-0.35"
};

exports.resources = {
  "128": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-128",
  "192": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-192",
  "256": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-256",
  "320": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-320",
  "384": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-384",
  "448": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-448",
  "512": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-512",
  "576": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-576",
  "640": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-640",
  "704": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-704",
  "768": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-768",
  "832": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-832",
  "896": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-896",
  "960": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-960",
  "1024": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-1024",
  "1088": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-1088",
  "1152": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-1152",
  "1216": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-1216",
  "1280": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-1280",
  "1344": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-1344",
  "1408": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-1408",
  "1472": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-1472",
  "1536": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-1536",
  "1600": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-1600",
  "1664": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-1664",
  "1728": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-1728",
  "1792": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-1792",
  "1856": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-1856",
  "1920": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-1920",
  "1984": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-1984",
  "2048": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-2048",
  "2112": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-2112",
  "2176": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-2176",
  "2240": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-2240",
  "2304": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-2304",
  "2368": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-2368",
  "2432": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-2432",
  "2496": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-2496",
  "2560": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-2560",
  "2624": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-2624",
  "2688": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-2688",
  "2752": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-2752",
  "2816": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-2816",
  "2880": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-2880",
  "2944": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-2944",
  "3008": "https://ow84k9ff8j.execute-api.eu-west-1.amazonaws.com/dev/aws-executor-3008",
};
