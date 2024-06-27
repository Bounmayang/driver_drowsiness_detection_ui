import  { useRef, useEffect, useState } from "react";
import axios from "axios";
import { APILINK } from "../constant";
const Camera = () => {
  const videoRef = useRef(null);
  const [results, setResults] = useState([]);
  const accessUser = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    if (videoRef.current) {
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      });
    }
  }, [videoRef]);

  const captureFrame = async () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const video = videoRef.current;

    if (video) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      canvas.toBlob(async (blob) => {
        const formData = new FormData();
        formData.append("file", blob, "frame.jpg");

        try {
          const response = await axios.post(`${APILINK}/user/detect`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${accessUser?.token}`,
            },
          });
          console.log("response:", response.data);
        } catch (error) {
          console.error("Error sending image:", error);
        }
      }, "image/jpeg");
    }
  };

  useEffect(() => {
    const interval = setInterval(captureFrame, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" w-full">
      <video ref={videoRef} style={{ width: "100%" }} />
    </div>
  );
};

export default Camera;