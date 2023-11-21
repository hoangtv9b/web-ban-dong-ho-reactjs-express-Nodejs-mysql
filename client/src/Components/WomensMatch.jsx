import React from "react";
import { Breadcrumb, BreadcrumbItem } from "./Breadcumb";
import ProductShow from "./ProductShow";
const WomensMatch = (props) => {
    const { product } = props;
    return ( 
        <>
            <div className="container-fuid my-2">
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem link="/" label="Trang chủ" />
                            <BreadcrumbItem link="/dong-ho-nu" label="đồng hồ nữ" />
                        </Breadcrumb>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="category-product-wrap mb-5">
                                <h5 className="title-category-product">
                                    DANH MỤC SẢN PHẨM
                                </h5>
                                <ul className="sub-menu-category-product">
                                    <li className="category-product-nav-item"><a href="#">Đồng Hồ Nam</a></li>
                                    <li className="category-product-nav-item"><a href="#">Đồng Hồ Nữ</a></li>
                                    <li className="category-product-nav-item"><a href="#" className="d-flex justify-content-between">Thương hiệu<i class="fa-solid fa-caret-down text-end"></i></a>
                                        <ul className="sub-menu-child-category-product">
                                            <li className="category-product-nav-item"><a href="#">Đồng hồ OP</a></li>
                                            <li className="category-product-nav-item"><a href="#">Đồng hồ Olym Pianus</a></li>
                                            <li className="category-product-nav-item"><a href="#">Đồng hồ Ogival</a></li>
                                            <li className="category-product-nav-item"><a href="#">Đồng hồ Citizen</a></li>
                                            <li className="category-product-nav-item"><a href="#">Đồng hồ Orient</a></li>
                                            <li className="category-product-nav-item"><a href="#">Đồng hồ Seiko</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <ul className="trademark-title">
                                <li><a>TỪ KHÓA</a></li>
                            </ul>
                            <form className="search-engine-form mb-4 mt-4">
                                <input type="search" className="search-engine" name="search-engine" placeholder="Từ khóa tìm kiếm" />
                            </form>
                            <ul className="trademark-title">
                                <li><a>GIÁ SẢN PHẨM</a></li>
                            </ul>
                            <form className="search-engine-form mb-4 mt-4">
                                <input type="search" className="search-engine" name="search-engine" placeholder="Nhập giá sản phẩm" />
                            </form>
                            <ul className="trademark-title">
                                <li><a>THƯƠNG HIỆU</a></li>
                            </ul>
                            <ul className="trade-mark-list">
                                <li className="trade-mark-item"><input type="checkbox" /><label>oppo</label></li>
                                <li className="trade-mark-item"><input type="checkbox" /><label>oppo</label></li>
                                <li className="trade-mark-item"><input type="checkbox" /><label>oppo</label></li>
                                <li className="trade-mark-item"><input type="checkbox" /><label>oppo</label></li>
                                <li className="trade-mark-item"><input type="checkbox" /><label>oppo</label></li>
                            </ul>
                        </div>
                        <div className="col-md-9">
                            <div className="top-list-product d-flex align-items-center ">
                                <div className="col-sm-5 d-flex align-items-center">
                                    <h2 className="trade-mark-title">ĐỒNG HỒ NỮ</h2><span className="count-product-text">(15 Sản phẩm)</span>
                                </div>
                                <div className="col-sm-7 d-flex justify-content-end">
                                    <a href="#" className="sort-product-btn">Sắp xếp<i class="fa-solid fa-caret-down"></i></a>
                                </div>
                            </div>
                            <div className="list-product row my-3">
                                <ProductShow product={product} category={"Đồng hồ nữ"} quantity={0} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default WomensMatch;