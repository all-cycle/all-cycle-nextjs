import fetchData from "@/utils/fetchData";

async function callVisionApi(uri) {
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
    const data = await fetchData("POST", process.env.GOOGLE_VISION_API_URL, body);
    // console.log("1", data.responses[0].textAnnotations[0].description);
    // console.log("2", data.responses[0].fullTextAnnotation.text);

    if (!Object.entries(data.responses[0]).length) {
      return [];
    }

    return data.responses[0].fullTextAnnotation.text;
  } catch (err) {
    return err.message;
  }
}

export default callVisionApi;
