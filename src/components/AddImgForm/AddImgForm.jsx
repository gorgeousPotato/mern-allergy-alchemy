import { useState, useRef, useEffect } from 'react';

import * as imagesAPI from "../../utilities/images-api"

import "./AddImgForm.css"

export default function AddImgForm({recipe}) {
  // const [file, setFile] = useState('');
  // const [uploaded, setUploaded] = useState(false);
  // function handleChange(evt) {
  //   setFile(evt.target.files[0]);
  // }
  // async function handleUpload(evt) {
  //   evt.preventDefault();
    
  //   const formData = new FormData();
  //   formData.append('image', file);
  //   const newImg = await imagesAPI.addImg(formData, recipe._id);
  //   setFile('');
  //   setUploaded(true)
  // }
  const [image, setImage] = useState('');
  const fileInputRef = useRef();
  
  useEffect(function() {
    imagesAPI.getAll(recipe._id).then(image => setImage(image));
  }, []);

  async function handleUpload() {
    const formData = new FormData();
    formData.append('image', fileInputRef.current.files[0]);
    const newImage = await imagesAPI.upload(formData, recipe._id);
    setImage([newImage]);
    fileInputRef.current.value = '';
  }

  return (
    // <div>
    //   <h1>Add Image</h1>
    //   {uploaded && <p>Image is uploa</p> }
    //   <form onSubmit={handleUpload} encType="multipart/form-data">
    //     <label>Upload Image</label>
    //     <input type="file" name="image" onChange={handleChange} required />
    //     <button type="submit">Add</button>
    //     </form>
    // </div>
    <div>
      <h1>Add Image</h1>
        <label>Upload Image</label>
        <input type="file" ref={fileInputRef} />
        <button onClick={handleUpload}>Upload</button>
    </div>
  );
}


