import React, { useState } from 'react';
import axios from 'axios';
const AddImages = () => {
  const [files, setFiles] = useState([])

  const handleFileChange = (e) => {
    setFiles(e.target.files)
  }

  const upload = () => {
    const formData = new FormData()

    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i])
    }

    axios.post('/upload', formData)
      .then(res => {
        // Xử lý kết quả sau khi tải lên thành công
      })
      .catch(err => {
        // Xử lý lỗi khi tải lên thất bại
        console.log(err)
      })
  }
  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button type="button" onClick={upload}>Upload</button>
    </div>
  )
}
 
export default AddImages;