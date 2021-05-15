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

  const response = await fetch(process.env.GOOGLE_VISION_API_URL, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Referrer: process.env.GOOGLE_VISION_API_URL,
    },
    body: JSON.stringify(body),
  });

  const parsed = await response.json();

  res.json({
    result: true,
    data: parsed.responses[0].fullTextAnnotation.text,
  });
};
