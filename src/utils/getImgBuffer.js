function getImgBuffer(base64) {
  if (!base64.match(/^data:image\/\w+;base64,/)) return false;

  const base64str = base64.replace(/^data:image\/\w+;base64,/, "");
  return Buffer.from(base64str, "base64");
}

export default getImgBuffer;
