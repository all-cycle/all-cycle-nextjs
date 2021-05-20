import AWS from "aws-sdk";
import { getSession } from "next-auth/client";

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
import callVisionAPI from "@/utils/callVisionAPI";

const { AWS_ACCESS_ID_MYAPP, AWS_ACCESS_KEY_MYAPP } = process.env;
AWS.config.credentials = new AWS.Credentials(AWS_ACCESS_ID_MYAPP, AWS_ACCESS_KEY_MYAPP);

export default async (req, res) => {
  const { body } = req;
  console.log("uriiiiiii");

  try {
    const session = await getSession({ req });

    if (!session) {
      return res.json({
        result: false,
        error: "Unauthorized user",
      });
    }

    const { email } = session.user;
    console.log(email, "emailalailaia");

    const detectedText = await callVisionAPI(body);

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
    const buffer = getImgBuffer(body);

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
