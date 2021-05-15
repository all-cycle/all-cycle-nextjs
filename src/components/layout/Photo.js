import { useState } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

import fetchData from "@/utils/fetchData";

function Photo() {
  const [dataUri, setDataUri] = useState("");

  async function handleTakePhoto(uri) {
    console.log("takePhoto");
    setDataUri(uri);

    const data = await fetchData("POST", "/api/photo", uri);

    console.log(data);
  }

  return (
    <div>
      <Camera
        onTakePhotoAnimationDone={handleTakePhoto}
        isFullscreen={false}
        imageCompression={0.5}
        sizeFactor={0.5}
        imageType="jpg"
      />
      <img src={dataUri} alt="hi" style={{ width: "100px", height: "80px" }} />
    </div>
  );
}

export default Photo;