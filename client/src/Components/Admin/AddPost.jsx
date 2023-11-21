import React, { useEffect } from "react";
import JoditEditor from 'jodit-react';
import { useMemo, useState, useRef } from "react";
import axios from "axios";
const AddPost = () => {
    const [content, setContent] = useState("");
    const [formData, setFormData] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);
    const [files, setFiles] = useState([]);
    const config = {

    };
    const handleChange = (value) => {
        setFormData({...formData, content: value});
        // console.log(content)
    };
    useEffect(()=>{
        setFormData({...formData, author: localStorage.getItem("nameAdmin")})
    }, [])
    const handleImageUpload = (event) => {
        const image = event.target.files[0];
        const imageName = image.name;
        // const timestamp = Date.now();
        // const newImageName = timestamp + '_' + imageName;
        setSelectedImage(URL.createObjectURL(image));
        setFiles((prevFiles) => [...prevFiles, image]);
        setFormData({ ...formData, [event.target.name]: imageName });
    };
    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const handleSubmit = async (event) => {
        alert("Thêm bài viết thành công!")
        window.location.reload();
        const newFormData = new FormData()
        for (let i = 0; i < files.length; i++) {
            newFormData.append('images', files[i])
        }
        event.preventDefault();      
        try {
            const addProductRequest = axios.post("/api/add-post", formData);
            const uploadRequest = axios.post("/upload", newFormData);
            const [addProductResponse, uploadResponse] = await Promise.all([addProductRequest, uploadRequest]);
        } catch (error) {
            console.error("Lỗi khi gửi dữ liệu:", error);
        }
    }
    return ( 
        <>
            <div className="content-admin-nav d-block px-4 py-3">
                <div className="table-product row">
                    <div className="col-md-8">
                        <h5 className="pt-3">Thêm tiêu đề</h5>
                        <form encType="multipart/form-data" method="post" onsubmit>
                            <input type="text" className="form-control" name="titlePost" onChange={handleInputChange} placeholder="Thêm tiêu đề" id="title-post-add" required />
                            <hr />
                            <h5>Thêm ảnh</h5>
                                <input type="file" name="imagePost" onChange={handleImageUpload} accept="image/jpeg,image/png,image/gif" required />
                                <div className="image-preview">{selectedImage && <img className="preview-image" src={selectedImage} alt="Selected" />}</div>
                            <hr />
                            {/* rich texteditor */}
                            <span className="content-post mb-2">Nhập nội dung</span>
                            <div className="rich-text-editor">
                                <JoditEditor value={content} onChange={handleChange} />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4">
                        <div className="establish-post-section">
                            <h5 className="pt-3" >Đăng bài viết</h5>
                            <hr />
                            <div className="save-and-show-wrap py-2 d-flex justify-content-between">
                                <a href="#" className="btn btn-primary"><i className="fa-solid fa-floppy-disk mr-2" />Lưu bản nháp</a>
                                <a href="#" className="btn btn-success"><i className="fa-solid fa-eye mr-2" />Xem thử</a>
                            </div>
                            <div className="status-add-post py-2">
                                <span>Trạng thái: </span> <span>Đã hoàn thành</span>
                            </div>
                            <div className="security-level py-2">
                                <span>Hiển thị: </span> <span>Công khai</span>
                            </div>
                            <div className="py-2">
                                <span>Đăng: </span><span>ngay lập tức</span>
                            </div>
                            <div className="delete-or-post d-flex justify-content-between py-2">
                                <a href="#">Thêm vào thùng rác</a>
                                <button type="submit" onClick={handleSubmit} className="btn btn-primary"><i className="fa-solid fa-upload mr-2" />Đăng bài</button>
                            </div>
                        </div>
                        <div className="catalog-management pt-3">
                            <h5 className="pt-3">Danh mục</h5>
                            <hr />
                            <div className="post-category-wrap">
                                <select name="category" onChange={handleInputChange} className="mb-3">
                                <option value="Tin giải trí">Tin giải trí</option>
                                </select>
                                <a href="#" className>Thêm danh mục</a>
                            </div>
                            <hr />
                            <h4>Thẻ</h4>
                            <div className="add-tag-wrap">
                                <input type="text" name="tag" onChange={handleInputChange} className="form-control my-2" />
                                <p>Phân cách các thẻ bằng dấu phẩy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default AddPost;