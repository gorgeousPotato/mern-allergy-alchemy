import { useState, useRef, useEffect } from 'react';

import * as imagesAPI from "../../utilities/images-api"

import "./AddImgForm.css"

export default function AddImgForm({recipe}) {
  
  const [image, setImage] = useState('');
  const fileInputRef = useRef();
  
  useEffect(function() {
    imagesAPI.getAll(recipe._id).then(image => setImage(image));
  }, []);

  async function handleUpload() {
    const formData = new FormData();
    formData.append('image', fileInputRef.current.files[0]);
    const newImage = await imagesAPI.upload(formData, recipe._id);
    setImage(newImage);
    fileInputRef.current.value = '';
  }

  return (
    
    <div className='AddImageForm'>
      <h1>Add Image</h1>
      <img src={image} class="uploaded-img"></img>
      <label>Upload Image</label>
      <input type="file" ref={fileInputRef} />
      <button onClick={handleUpload} class="add-btn">Upload</button>
    </div>
  );
}


