import { apiHandler } from "@/lib/server/api-handler";
import { S3 } from "aws-sdk";
import joi from "joi";

module.exports = apiHandler({
  POST: uploadToS3,
});

const s3 = new S3({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

async function uploadToS3(req: Request) {
  const body = await req.json();
  const { url, name } = body;
  console.log({ url, name });
  const image = await getFileFromUrl(url, name);
  if (!image) return;
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: name,
    Body: image,
  };
  console.log({ params, s3 });
}

async function getFileFromUrl(
  url: string,
  name: string,
  defaultType = "image/jpeg"
) {
  const response = await fetch(url);
  const data = await response.blob();
  return new File([data], name, {
    type: data.type || defaultType,
  });
}

uploadToS3.schema = joi.object({
  url: joi.string().required(),
  name: joi.string().required(),
});
