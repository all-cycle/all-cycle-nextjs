import { useState } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

import axios from "axios";
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
      />
      <img src={dataUri} alt="hi" style={{ width: "100px", height: "80px" }} />
      {/* <button type="button" onClick={getTextFromImage}>분석하기</button> */}
    </div>
  );
}

export default Photo;
