import React, { useState } from 'react';

export default function ImgUpload() {
  // =============testing img handling==================
  let [img, setImg] = useState(null);
  function imgHandler(e) {
    setImg(e.target.files[0]);
    console.log('img=>', img);
  }

  function uploadImgHandler() {
    console.log('img=>', img);
    console.log('img w=>', img.width);
    let fromData = new FormData();
    fromData.append('file', img);
    // checking img width and height
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = (e) => {
      const image = new Image();
      image.src = e.target.result;
      image.onload = () => {
        const { height, width } = image;
        console.log('height=>', height);
      };
    };
  }

  // Request made to the backend api
  // axios.post("api/uploadfile", formData);
  return (
    <div>
      <label htmlfor="myfile">Select a file:</label> <br /> <br />
      <input
        onChange={(event) => imgHandler(event)}
        type="file"
        id="myfile"
        name="myfile"
      />
      <br /> <br />
      <button onClick={uploadImgHandler}>Upload</button>
    </div>
  );
}
