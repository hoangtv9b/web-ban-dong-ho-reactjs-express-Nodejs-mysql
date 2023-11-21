import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
const Product = (props) => {
    const navigate = useNavigate();
    const { product } = props;
    const [quantityData, setQuantityData] = useState(5);
    const [showModal, setShowModal] = useState(false);
    const [confirmDelProduct, SetConfirmDelProduct] = useState(false);
    const handleClose = () => setShowModal(false);
    const [idProduct, setIdProduct] = useState([]);
    const quantityDataHandle = (event) => {
        setQuantityData(event.target.value);
    }
    useEffect(()=>{
        if(quantityData <= 0){
            setQuantityData(product.length)
        }
    })
    const deleteProduct = (item) => {
        setIdProduct({...idProduct, id: item.id});
        setShowModal(true);
    }
    const handleConfirmDelProduct = () => {
        try {
            axios.delete("/api/delete-product/", {data: idProduct});
            window.location.reload();
        }catch(error){
            console.error("error: "+error);
        }
    }
    return(
        <>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Bạn có muốn xóa sản phẩm này không?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-end">
                        <button className="btn btn-primary" onClick={()=> {handleConfirmDelProduct(); handleClose()}}>Xóa</button>
                        <span className="p-1"></span>
                        <button className="btn btn-secondary" onClick={handleClose}>hủy</button>
                    </div>
                    
                </Modal.Body>
            </Modal>
            <div className="content-admin-nav d-block p-3">
                <div className="app-title d-flex justify-content-between p-2">
                    <span>Danh sách sản phẩm</span>
                    <span id="time" />
                </div>
                <div className="table-product my-3 p-3">
                    <div class="element-button d-flex py-2">
                        <div class="btn-element"><a href="/dashboard-admin/add-product" class="btn btn-warning btn-sm"><i class="icon-button fa-solid fa-plus"></i>Tạo mới sản phẩm</a></div>
                        <div class="btn-element"><a href="#" class="btn btn-primary btn-sm"><i class="icon-button fa-solid fa-file-circle-plus"></i>Tải từ file</a></div>
                        <div class="btn-element"><a href="#" class="btn btn-info btn-sm"><i class="icon-button fa-solid fa-print"></i>In dữ liệu</a></div>
                        <div class="btn-element"><a href="#" class="btn btn-dark btn-sm"><i class="icon-button fa-solid fa-trash-can"></i>Xóa tất cả</a></div>
                    </div>
                    <div>
                        <div className="datatables-length p-3">
                            <div className="data-length mt-2 d-flex justify-content-between align-items-center">
                                <div className="show-data-length">
                                    <label htmlFor className="d-flex align-items-center">
                                    Hiện
                                    <select name="quantity-data-length" onChange={quantityDataHandle} style={{width: 70, height: 40, margin: '0px 5px'}}>
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="0">tất cả</option>
                                    </select>
                                    sản phẩm
                                    </label>
                                </div>
                                <div className="search-product d-flex align-items-center">
                                    <span className="title-search-product mr-2">Tìm kiếm: </span>
                                    <form action="#" method="get" className="searchform-product">
                                    <input type="search" name="search-product" id placeholder="Tìm kiếm" />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <table className="table table-bordered">
                                <thead>
                                    <tr className="row-title">
                                        <th><input type="checkbox" name id="checkAll" /></th>
                                        <th>Mã sản phẩm</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Nhà cung cấp</th>
                                        <th>Ảnh</th>
                                        <th>Số lượng</th>
                                        <th>Tình trạng</th>
                                        <th>Giá tiền</th>
                                        <th>Danh mục</th>
                                        <th>Chức năng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {product.map((item, index)=>{
                                        if(index < quantityData){
                                            return (
                                                <tr className="row-product">
                                                    <td className="column-product"><input type="checkbox" name id /></td>
                                                    <td className="column-product">{item.codeProduct}</td>
                                                    <td className="column-product">{item.nameProduct}</td>
                                                    <td className="column-product">{item.tradeMark}</td>
                                                    <td className="column-product"><img width="50px" height="auto" src={`http://localhost:8080${item.imgProduct}`} alt="img-product" /></td>
                                                    <td className="column-product">{item.quantityProduct}</td>
                                                    <td className="column-product"><span className="status-product align-items-center">{item.statusProduct}</span></td>
                                                    <td className="column-product">{item.priceProduct} đ</td>
                                                    <td className="column-product">{item.categoryProduct}</td>
                                                    <td className="column-product">
                                                        <a href={`edit-product/${item.id}`} className="icon-edit mx-1"><i className="fa-solid fa-pen-to-square" /></a>
                                                        <a className="icon-delete mx-1" onClick={()=> deleteProduct(item)}><i className="fa-solid fa-trash-can" /></a>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    })
                                    }
                                </tbody>
                            </table>
                            <div className="padding d-flex justify-content-end">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Product;