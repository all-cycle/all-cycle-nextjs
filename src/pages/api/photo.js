import AWS from "aws-sdk";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import Product from "@/models/Product";
import getImgBuffer from "@/utils/getImgBuffer";
import callVisionAPI from "@/utils/callVisionAPI";

export default async (req, res) => {
  const base64 = req.body.slice(23);
  const body = {
    requests: [
      {
        image: { content: base64 },
        features: [{ type: "DOCUMENT_TEXT_DETECTION", maxResults: 10 }],
      },
    ],
  };

  try {
    const response = await fetch(process.env.GOOGLE_VISION_API_URL, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const parsed = await response.json();

    if (!Object.entries(parsed.responses[0]).length) {
      return res.json({
        result: false,
        error: "TRY AGAIN!",
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
