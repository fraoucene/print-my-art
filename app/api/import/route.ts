import joi from "joi";
import { S3 } from "aws-sdk";

import { worksRepo } from "@/lib/server/repository/work-repo";
import { apiHandler } from "@/lib/server/api-handler";
import axios from "axios";
import { File } from "buffer";

const s3 = new S3({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

module.exports = apiHandler({
  POST: importWorks,
});

async function importWorks(req: Request) {
  const body = await req.json();
  console.log({ body });
  const image = await getFileFromUrl(body.image, "test-image");

  // const params: any = {
  //   Bucket: process.env.S3_BUCKET_NAME,
  //   Key: "test-image.jpg",
  //   Body: new File(image as any, "test-image.jpg", {
  //     type: "image/jpeg",
  //   }),
  // };
  // console.log({ params });
  // const upload = s3.upload(params);
  // await upload.promise();
  // console.log(`File uploaded successfully: ${image.name}`);
  // await fetchImage(
  //   "https://theceoviews.com/wp-content/uploads/2021/09/How-To-Use-Stock-Photos-Without-Getting-Sued.jpg"
  // );
  await fetchImage(body.image);

  await worksRepo.create(body);
}

importWorks.schema = joi.object({
  image: joi.string().required(),
  prompt: joi.string().optional(),
  fullPrompt: joi.string().optional(),
  description: joi.string().optional(),
  aspect: joi.string().optional(),
});

async function getFileFromUrl(
  url: string,
  name: string,
  defaultType = "image/jpeg"
) {
  const response = await fetch(
    "https://theceoviews.com/wp-content/uploads/2021/09/How-To-Use-Stock-Photos-Without-Getting-Sued.jpg"
  );
  // const buffer = Buffer.from(response.data, "binary");
  const data = await response.blob();
  return data;
  // return buffer;
  // return new File([data], name, {
  //   type: data.type || defaultType,
  // });
}

const fetchImage = async (mediaUrl: string) => {
  const imageRes: any = await axios.get(mediaUrl, {
    responseType: "arraybuffer",
  });
  try {
    await s3
      .putObject({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: "test-image.jpg",
        Body: Buffer.from(imageRes.data, "base64"),
        ContentType: imageRes.mimeType || "image/jpeg",
      } as any)
      .promise();
    console.log(`Image upload with key test-image.jpg`);
  } catch (err) {
    console.log(err);
    const message = `Error upload Image test-image.jpg from bucket ${process.env.S3_BUCKET_NAME}. Make sure they exist and your bucket is in the same region as this function.`;
    console.log(message);
    throw new Error(message);
  }
};
