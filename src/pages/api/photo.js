import AWS from "aws-sdk";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import Product from "@/models/Product";
import getImgBuffer from "@/utils/getImgBuffer";
import callVisionAPI from "@/utils/callVisionAPI";
// import {
//   BUCKET,
//   ACL,
//   CONTENT_ENCODING,
//   CONTENT_TYPE,
// } from "@/constants/awsParams";

// const { AWS_ACCESS_ID_MYAPP, AWS_ACCESS_KEY_MYAPP } = process.env;
// AWS.config.credentials = new AWS.Credentials(AWS_ACCESS_ID_MYAPP, AWS_ACCESS_KEY_MYAPP);

// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_ID_MYAPP,
//   secretAccessKey: process.env.AWS_ACCESS_KEY_MYAPP,
//   region: process.env.AWS_REGION_MYAPP,
//   bucketname: process.env.AWS_BUCKET_NAME,
// });

// New S3 class
// const s3 = new AWS.S3();

export default async (req, res) => {
  const { email, uri } = req.body;

  try {
    const detectedText = await callVisionAPI(uri);

    if (!detectedText.length) {
      res.json({
        result: false,
        error: "TRY AGAIN!!",
      });
    }

    await connectDB();
    const detectedProductText = parsed.responses[0].fullTextAnnotation.text.split(/\n/);

    const productNames = await Product.find().select("name");

    return res.json({
      result: true,
      data: parsed.responses[0].fullTextAnnotation.text,
    });
  } catch (error) {
    return res.status(400).json({
      result: false,
      error: error.message,
    });
  }
};
