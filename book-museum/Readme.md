**STEP1**: 
Create a directory Book-Museum inside git repository

**STEP2**:

cd Book-Museum
npm init

**STEP3**:
npm install node-fetch@^2.6.2

**STEP4**:
-create a role that can be assumed by a Lambda function, we have to first create a trust policy file and save it as trust-poliicy.json-

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Service": "lambda.amazonaws.com"
            },
            "Action": "sts:AssumeRole"
        }
    ]
}

-create a IAM role with aws cli as follows with role name

aws iam create-role --role-name  BookMuseumLambdaRole --assume-role-policy-document file://trust-policy.json

**STEP5**:

-Attach the managed policy AWSLambdaBasicExecutionRole-

aws iam attach-role-policy --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole --role-name BookMuseumLambdaRole

**STEP6**:
create index.js with exports.handler along with necessary code function inside book-museum directory and compress the folder with node_modules,package.json,package.lock.json,index.js

**STEP7**:
with aws cli create a lambda fuction

aws lambda create-function --function-name Book-Museum --runtime nodejs14.x  --zip-file fileb://book-museum.zip --handler index.handler --role arn:aws:iam::xxxxxxxxx:role/BookMuseumLambdaRole

**STEP8**:
with aws cli invoke a lambda function

 aws lambda invoke --function-name Book-Museum --payload '{ "buyer_id" : "mariano", "museum_name" : "tate gallery", "when" : "2020-03-14" }' out.txt

**STEP9**

Open a aws console and create a test event with necessart payload and check the result. -If you get transient error retry again-. The following output will be generated.

*-{ when: '2020-03-14', reservation_id: 'XZWEU', name: 'tate gallery' }-*


