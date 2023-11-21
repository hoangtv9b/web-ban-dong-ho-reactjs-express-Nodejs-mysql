import {React, useState} from "react";
import axios from "axios";
const AddProduct = () => {
    const [formData, setFormData] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImages, setSelectedImages] = useState([]);
    const [files, setFiles] = useState([]);
    const handleImageUpload = (event) => {
        const image = event.target.files[0];
        const imageName = image.name;
        // const timestamp = Date.now();
        // const newImageName = timestamp + '_' + imageName;
        setSelectedImage(URL.createObjectURL(image));
        setFiles((prevFiles) => [...prevFiles, image]);
        setFormData({ ...formData, [event.target.name]: imageName });
    };
    
    const handleImageUploads = (event) => {
        const files = Array.from(event.target.files);
        const imageNames = files.map((file) => file.name);
        // const timestamp = Date.now();
        // const newImageNames = imageNames.map((name) => name);
        setSelectedImages(files);
        setFiles((prevFiles) => [...prevFiles, ...files]);
        setFormData({ ...formData, [event.target.name]: imageNames });
    };
    const handleSubmit = async (event) => {
        alert("Thêm sản phẩm thành công!")
        window.location.reload()
        const newFormData = new FormData()
        for (let i = 0; i < files.length; i++) {
            newFormData.append('images', files[i])
        }
        event.preventDefault();      
        try {
            const addProductRequest = axios.post("/api/add-product", formData);
            const uploadRequest = axios.post("/upload", newFormData);
            const [addProductResponse, uploadResponse] = await Promise.all([addProductRequest, uploadRequest]);
        } catch (error) {
            console.error("Lỗi khi gửi dữ liệu:", error);
        }  
    };
    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    return(
        <>
            <div className="content-admin-nav d-block p-3">
                <div className="app-title d-flex justify-content-between p-2">
                    <span>Thêm sản phẩm</span>
                    <span id="time" />
                </div>
                <div className="table-product my-3 p-3">
                    <div className="element-button d-flex py-2">
                        <div className="btn-element"><a href="/admin/add-product/" className="btn btn-success btn-sm"><i className="fa-solid fa-folder-plus" />Thêm nhà cung cấp</a></div>
                        <div className="btn-element"><a href="#" className="btn btn-primary btn-sm"><i className="fa-solid fa-folder-plus" />Thêm danh mục</a></div>
                    </div>
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="add-product-form mt-2 col-md-12">
                            <div className="row">
                            <div className="column-add-product col-md-3 d-flex flex-column">
                                <span>Mã sản phẩm</span>
                                <input type="number" name="codeProduct" id="code-product-add" onChange={handleInputChange} required />
                                <span>Danh mục</span>
                                <select name="categoryProduct" onChange={handleInputChange} required>
                                    <option value="">-- Chọn --</option>
                                    <option value="Đồng hồ nam">Đồng hồ nam</option>
                                    <option value="Đồng hồ nữ">Đồng hồ nữ</option>
                                    <option value="Phụ kiện">Phụ kiện</option>
                                    <option value="Đồng hồ đôi">Đồng hồ đôi</option>
                                </select>
                            </div>
                            <div className="column-add-product col-md-3 d-flex flex-column">
                                <span>Tên sản phẩm</span>
                                <input type="text" name="nameProduct" id="name-product-add" onChange={handleInputChange} required />
                                <span>Thương hiệu</span>
                                <select name="tradeMark" onChange={handleInputChange} required>
                                    <option value="">-- Chọn --</option>
                                    <option value="Olym pianus">Olym pianus</option>
                                    <option value="Ogival">Ogival</option>
                                    <option value="Seiko">Seiko</option>
                                    <option value="Orient">Orient</option>
                                </select>
                            </div>
                            <div className="column-add-product col-md-3 d-flex flex-column">
                                <span>Số lượng</span>
                                <input type="number" name="quantityProduct" id="quantity-product-add" onChange={handleInputChange} required />
                                <span>Giá bán</span>
                                <input type="number" name="priceProduct" id="price-product-add" onChange={handleInputChange} required />
                            </div>
                            <div className="column-add-product col-md-3 d-flex flex-column">
                                <span>Tình trạng</span>
                                <select name="statusProduct" onChange={handleInputChange} required>
                                    <option value="">-- Chọn --</option>
                                    <option value="còn hàng">Còn hàng</option>
                                    <option value="hết hàng">Hết hàng</option>
                                </select>
                                <span>Giá vốn</span>
                                <input type="number" name="prmProduct" id="cost-product-add" onChange={handleInputChange} required />
                            </div>
                            </div>
                        </div>
                        <div className="add-image-product mt-2 d-flex flex-column">
                            <span className="mb-2">Ảnh đại diện sản phẩm</span>
                            <input type="file" name="imgProduct" onChange={handleImageUpload} accept="image/jpeg,image/png,image/gif" required />
                            <div className="image-preview">{selectedImage && <img className="preview-image" src={selectedImage} alt="Selected" />}</div>
                            <span className="mb-2 mt-4">Ảnh chi tiết sản phẩm <br /> (Ấn giữ Shift để chọn nhiều ảnh)</span>
                            <input type="file" name="files" multiple onChange={handleImageUploads} accept="image/jpeg,image/png,image/gif" required />
                            <div className="d-flex flex-wrap">
                                {selectedImages.map((file, index) => (
                                    <div key={index}>
                                        <img className="preview-image" src={URL.createObjectURL(file)} alt={`image-${index}`} />
                                    </div>
                                ))}
                            </div> 
                        </div>
                        <div className="add-detail-product col mt-4 d-flex flex-column">
                            <span className="mb-2">Mô tả sản phẩm</span>
                            <textarea name="detailProduct" id="detail-product-add" onChange={handleInputChange} cols="100%" rows={5} required defaultValue={""} />
                        </div>
                        <div className="directional col-md-12 d-flex justify-content-end">
                            <input type="submit" name="submit-add-product" defaultValue="Lưu lại" className="save-add-product" />
                            <a href className="exit-add-product">Hủy bỏ</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default AddProduct;