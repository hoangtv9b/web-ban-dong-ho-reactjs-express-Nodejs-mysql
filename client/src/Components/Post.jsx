import React from "react";
import { Breadcrumb, BreadcrumbItem } from "./Breadcumb";
import PostShow from "./PostShow";
const Post = (props) => {
    const {allPost} = props;
    return ( 
        <>
            <div className="container-fuid my-2">
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem link="/" label="Trang chủ" />
                            <BreadcrumbItem link="/tin-tuc" label="Tin giải trí" />
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
                                    DANH MỤC TIN TỨC
                                </h5>
                                <ul className="sub-menu-category-product">
                                    <li className="category-product-nav-item"><a href="#">Tin giải trí</a></li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="top-list-product d-flex align-items-center ">
                                <div className="col-sm-5 d-flex align-items-center">
                                    <h2 className="trade-mark-title">TIN GIẢI TRÍ</h2>
                                </div>
                                <div className="col-sm-7 d-flex justify-content-end">
                                    <a href="#" className="sort-product-btn">Sắp xếp<i class="fa-solid fa-caret-down"></i></a>
                                </div>
                            </div>
                            <div className="list-product row my-3">
                                <PostShow allPost={allPost} category={"Tin giải trí"} quantity={4} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Post;