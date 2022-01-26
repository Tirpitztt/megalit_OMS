const AWS = require('aws-sdk');
const { ListObjectsCommand } = require("@aws-sdk/client-s3");
const s3Client = require("../libs/s3Client");

class AwsController {
    constructor() {
        AWS.config.setPromisesDependency();
    }

    async getContures(req,res){
        try{
            const bucketParams = {
                Bucket:'elasticbeanstalk-eu-central-1-512346490374',
                Prefix:'megalit/contures/'
            }
            const response = await s3Client.send(new ListObjectsCommand(bucketParams));
            //const response = await s3Client.send(new ListMultipartUploadsCommandOutput(bucketParams));
            return res.status(200).json(response);
        }catch (e) {
            return res.status(400).json({message:'get files error:'+e.message})
        }
    }
    async getConturesFolder(req,res){
        try{
            const bucketParams = {
                Bucket:'elasticbeanstalk-eu-central-1-512346490374',
                Prefix:'megalit/contures/'
            }
            if(req.body){
                bucketParams.Prefix = req.body.path.slice(0,req.body.path.length);
            }
            const response = await s3Client.send(new ListObjectsCommand(bucketParams));
            return res.status(200).json(response);
        }catch (e) {
            return res.status(400).json({message:'server err:',err:e.message});
        }
    }

}

module.exports = new AwsController();