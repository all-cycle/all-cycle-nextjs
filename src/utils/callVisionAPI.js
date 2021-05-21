import axios from "axios";

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
    const res = await axios.post(process.env.GOOGLE_VISION_API_URL, body);

    if (!Object.entries(res.data.responses[0]).length) {
      return [];
    }

    return res.data.responses[0].fullTextAnnotation.text;
  } catch (err) {
    return err.message;
  }
}

export default callVisionAPI;
