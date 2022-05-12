const aws = require('aws-sdk');
const S3 =  new aws.S3();
exports.handler = async (event) => {
    console.log(event);
    
    try {
        const params = {
            Bucket: "bookinginvoices1234",
            Key: "invoice.json",
            ContentType: "application/json;charset=utf-8",
            Body: JSON.stringify(event)
        }
        
        await S3.putObject(params).promise();
        console.log("upload completed");
        const response = {
            statusCode: 200,
            body: JSON.stringify('event'),
        };
        return response;
    }catch(e) {
        console.log(e);
        throw e;
    }

};