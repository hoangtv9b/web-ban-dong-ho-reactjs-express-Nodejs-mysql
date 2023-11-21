import React, { useEffect, useState } from "react";
const PostAdmin = (props) => {
    const { allPost } = props;
    const [quantityData, setQuantityData] = useState(5);
    const handleQuantityChange = (event) => {
        setQuantityData(event.target.value);
    }
    useEffect(()=>{
        if(quantityData <= 0){
            setQuantityData(allPost.length)
        }
    })
    console.log(JSON.stringify(allPost))
    return ( 
        <>
            <div className="content-admin-nav d-block p-3">
                <div className="app-title d-flex justify-content-between p-2">
                    <span>Danh sách sản phẩm</span>
                    <span id="time" />
                </div>
                <div className="table-product my-3 p-3">
                    <div class="element-button d-flex py-2">
                        <div class="btn-element"><a href="/dashboard-admin/add-post" class="btn btn-warning btn-sm"><i class="icon-button fa-solid fa-plus"></i>Thêm bài viết</a></div>
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
                                    <select name="quantity-data-length" onChange={handleQuantityChange} style={{width: 70, height: 40, margin: '0px 5px'}}>
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="0">tất cả</option>
                                    </select>
                                    bài viết
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
                            <table className="table table-striped">
                                <thead>
                                    <tr className="row-title">
                                        <th><input type="checkbox" name id="checkAll" /></th>
                                        <th>STT</th>
                                        <th>Tên bài viết</th>
                                        <th>Danh mục</th>
                                        <th>Ảnh</th>
                                        <th>Nội dung</th>
                                        <th>Tác giả</th>
                                        <th>Thẻ</th>
                                        <th>Chức năng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {allPost.map((item, index)=>{
                                    if(index < quantityData){
                                        return(
                                            <tr className="row-product">
                                                <td className="column-product"><input type="checkbox" name id /></td>
                                                <td className="column-product">{item.id}</td>
                                                <td className="column-product col-2">{item.titlePost}</td>
                                                <td className="column-product">{item.category}</td>
                                                <td className="column-product"><img width="50px" height="auto" src={`http://localhost:8080${item.imagePost}`} alt="img-product" /></td>
                                                <td className="column-product col-3"><div className="content-post-preview">{item.content}</div></td>
                                                <td className="column-product"><a href="#">{item.author}</a></td>
                                                <td className="column-product">{item.tag}</td>
                                                <td className="column-product">
                                                    <a href={`edit-article/${item.id}`} className="icon-edit mx-1"><i className="fa-solid fa-pen-to-square" /></a>
                                                    <a className="icon-delete mx-1"><i className="fa-solid fa-trash-can" /></a>
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
     );
}
 
export default PostAdmin;