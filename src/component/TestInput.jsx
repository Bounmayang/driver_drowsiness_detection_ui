import axios from 'axios';
import React, { useState } from 'react';
import { APILINK } from '../constant';

function TestInput() {
    const [file, setFile] = useState(null);
    const accessUser = JSON.parse(localStorage.getItem("userInfo"));

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
 console.log("file",file)
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("file", file);

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
    };

    return (
        <div>
            <h2>Upload Image</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit" className="mt-4 bg-slate-500 p-4 rounded-md">Upload</button>
            </form>
        </div>
    );
}

export default TestInput;
