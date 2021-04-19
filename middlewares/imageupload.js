const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const imageUpload = async (filename, buffer) => {
  const extension = filename.split('.').pop();
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${Date.now()}.${extension}`,
    Body: buffer,
    ACL: 'public-read',  
  };
  try {
    const result = await s3.upload(params).promise();
    return Promise.resolve(result);
  } catch (err) {
    return Promise.reject(err);
  }
};


module.exports = {
  imageUpload
};