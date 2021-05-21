// import axios from "axios";
import fetch from "node-fetch";

async function callVisionAPI(uri) {
  const body = {
    requests: [{
      image: { content: uri.slice(23) },
      features: [{
        type: "DOCUMENT_TEXT_DETECTION",
        maxResults: 10,
      }],
    }],
  };

  try {
    console.log("callVisionAPI 주소", process.env.GOOGLE_VISION_API_URL);

    const res = await fetch(process.env.GOOGLE_VISION_API_URL, { method: "POST", body });


    console.log("callVisionAPI 다녀옴", res.data);
    if (!Object.entries(res.data.responses[0]).length) {
      return [];
    }

    return res.data.responses[0].fullTextAnnotation.text;
  } catch (err) {
    return err.message;
  }
}

export default callVisionAPI;
