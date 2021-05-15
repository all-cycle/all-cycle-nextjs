import { useState } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

import axios from "axios";

function Photo() {
  const [dataUri, setDataUri] = useState("");

  async function handleTakePhoto(dataUri) {
    console.log("takePhoto");
    setDataUri(dataUri);

    const data = {
      requests: [
        {
          image: {
            content: dataUri.slice(23),
          },
          features: [{
            type: "TEXT_DETECTION",
            maxResults: 5,
          }],
        },
      ],
    };

    await axios({
      method: "post",
      url: "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBrSZuzGpJELGcvzwqM6krRRzzI99Wk5yw",
      data,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then((r) => {
        console.log(r.data.response);
        // const array = r.data.responses[0].textAnnotations
        // for (let x = 1; x < array.length; x++) {
        //   if (array[x].description.includes('-')) {
        //     return this.props.cameraOffAndSetInput(array[x].description)
        //   }
        // }
      })
      .catch((error) => {
        console.log(error);
      });
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
