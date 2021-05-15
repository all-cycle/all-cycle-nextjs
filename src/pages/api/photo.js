export default async (req, res) => {
  console.log(req.cookies["next-auth.session-token"], "kooooo");
  const token = req.cookies["next-auth.session-token"];

  const body = {
    requests: [
      {
        image: { content: req.body },
        features: [{ type: "DOCUMENT_TEXT_DETECTION", maxResults: 10 }],
      },
    ],
  };

  const response = await fetch(process.env.GOOGLE_VISION_API_URL, {
    method: "post",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  console.log(response.data);
  res.json({
    result: true,
    data: response.data,
  });
};
