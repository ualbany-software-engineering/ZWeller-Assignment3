const S3 = require('aws-sdk/clients/s3')

const accessKeyId= process.env.AWS_ACCESS_KEY
const secretAccessKey=process.env.AWS_SECRET_KEY
const region=process.env.AWS_REGION
const bucketName=process.env.AWS_BUCKET_NAME


const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})
