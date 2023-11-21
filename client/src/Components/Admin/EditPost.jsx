import React from "react";
import JoditEditor from 'jodit-react';
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
const EditPost = (props) => {
    const { post } = props;
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(null);
    const [files, setFiles] = useState([]);
    const [postShow, setPostShow] = useState({});
    useEffect(()=>{
        post && post.forEach(item => {
             if(item.id == id){
                setPostShow(item);
             }
         }); 
     }, [post]);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPostShow((prevProductShow) => ({
            ...prevProductShow,
            [name]: value,
        }));
    }
    const handleChange = (value) => {
        setPostShow({...postShow, content: value});
    }
    const handleImageUpload = (event) => {
        const image = event.target.files[0];
        const imageName = image.name;
        // const timestamp = Date.now();
        // const newImageName = timestamp + '_' + imageName;
        setSelectedImage(URL.createObjectURL(image));
        setFiles((prevFiles) => [...prevFiles, image]);
        setPostShow({ ...postShow, [event.target.name]: imageName });
    }
    const handleSubmit = async (event) => {
        alert("Thay đổi thông tin bài viết thành công!");
        const newFormData = new FormData()
        for (let i = 0; i < files.length; i++) {
            newFormData.append('images', files[i])
        }
        event.preventDefault();
        try{
            const addProductRequest = await axios.put("/api/edit-post/", postShow);
            const uploadRequest = axios.post("/upload", newFormData);
            const [addProductResponse, uploadResponse] = await Promise.all([addProductRequest, uploadRequest]);
        }catch(error){
            console.log("error: "+error)
        }
    }
    return ( 
        <>
            <div className="content-admin-nav d-block px-4 py-3">
                <div className="table-product row">
                    <div className="col-md-8">
                        <h5 className="pt-3">Thêm tiêu đề</h5>
                        <form encType="multipart/form-data" method="post">
                            <input type="text" className="form-control" name="titlePost" value={postShow.titlePost} onChange={handleInputChange} placeholder="Thêm tiêu đề" id="title-post-add" />
                            <hr />
                            <h5>Thêm ảnh</h5>
                                <input type="file" name="imagePost" onChange={handleImageUpload} accept="image/jpeg,image/png,image/gif" required />
                                <div className="image-preview">{selectedImage ? <img className="preview-image" src={selectedImage} alt="Selected" /> : <img className="preview-image" src={`http://localhost:8080/${postShow.imagePost}`} alt="Selected" />}</div>
                            <hr />
                            {/* rich texteditor */}
                            <span className="content-post mb-2">Nhập nội dung</span>
                            <div className="rich-text-editor">
                                <JoditEditor value={postShow.content} onChange={handleChange} />
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
                                <select name="category" onChange={handleInputChange} value={postShow.category} id className="mb-3">
                                    <option value="">-- Chọn --</option>
                                    <option value="Tin giải trí">Tin giải trí</option>
                                </select>
                                <a href="#" className>Thêm danh mục</a>
                            </div>
                            <hr />
                            <h4>Thẻ</h4>
                            <div className="add-tag-wrap">
                                <input type="text" name="tag" onChange={handleInputChange} value={postShow.tag} className="form-control my-2" />
                                <p>Phân cách các thẻ bằng dấu phẩy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default EditPost;