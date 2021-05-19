/* eslint-disable func-names */
import AWS from "aws-sdk";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import Product from "@/models/Product";
import getImgBuffer from "@/utils/getImgBuffer";
import {
  BUCKET,
  ACL,
  CONTENT_ENCODING,
  CONTENT_TYPE,
} from "@/constants/awsParams";
import callVisionAPI from "@/utils/callVisionApi";

const { AWS_ACCESS_ID, AWS_ACCESS_KEY } = process.env;
AWS.config.credentials = new AWS.Credentials(AWS_ACCESS_ID, AWS_ACCESS_KEY);

export default async (req, res) => {
  const { email, uri } = req.body;

  try {
    const detectedText = await callVisionAPI(uri);
    // const response = await fetch(process.env.GOOGLE_VISION_API_URL, {
    //   method: "post",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(body),
    // });

    // const parsed = await response.json();

    if (!detectedText.length) {
      res.json({
        result: false,
        error: "TRY AGAIN!!",
      });
    }

    const textList = detectedText.split(" ");
    const keywords = textList.find((text) => text.length >= 2);

    await connectDB();
    // const detectedProductText = parsed.responses[0].fullTextAnnotation.text.split(/\n/);

    // const productNames = await Product.find().select("name");

    const s3 = new AWS.S3();
    const buffer = getImgBuffer(uri);

    const params = {
      Bucket: BUCKET,
      Key: `${email.slice(0, 5)}/${new Date().getTime()}`,
      Body: buffer,
      ACL,
      ContentEncoding: CONTENT_ENCODING,
      ContentType: CONTENT_TYPE,
    };

    s3.upload(params, async (err, data) => {
      if (err) {
        throw new Error("s3 upload failed");
      }

      try {
        await User.findOneAndUpdate(
          { email },
          {
            $push: { pictures: data.Location },
          },
        );
      } catch (err) {
        res.json({
          result: false,
          error: err.message,
        });
      }
    });

    return res.json({
      result: true,
      data: keywords,
    });
  } catch (error) {
    return res.status(400).json({
      result: false,
      error: error.message,
    });
  }
};
