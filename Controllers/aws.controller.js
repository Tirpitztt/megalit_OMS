const AWS = require('aws-sdk');
const config = require('config');

class AwsController {
    constructor() {
        AWS.config.setPromisesDependency();
        AWS.config.update({
            accessKeyId:config.get('awsAccessKey'),
            secretAccessKey:config.get('awsSecretAccessKey'),
            region:'eu-central-1'
        })
    }
    async getContures(req,res){
        try{
            const s3 = new AWS.S3();
            const response = await s3.listObjectsV2({
                Bucket:'elasticbeanstalk-eu-central-1-512346490374',
                Prefix:'megalit/contures'
            }).promise();
            return res.status(200).json(response);
        }catch (e) {
            return res.status(400).json({message:'get files error:'+e.message})
        }
    }
    async getConturesFolder(req,res){
        try{
            let pref = 'megalit/contures';
            console.log(req.body)
            if(req.body){
                pref = req.body.path.slice(0,req.body.path.length);
            }
            const s3 = new AWS.S3();
            const response = await s3.listObjectsV2({
                Bucket:'elasticbeanstalk-eu-central-1-512346490374',
                Prefix:pref
            }).promise();
            return res.status(200).json(response);
        }catch (e) {
            return res.status(400).json({message:'server err:',err:e.message});
        }
    }

}

module.exports = new AwsController();