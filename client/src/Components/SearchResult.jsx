import React, { useContext, useEffect, useState } from 'react';
import { Breadcrumb, BreadcrumbItem } from './Breadcumb';
import axios from 'axios';
import { ProductContext } from './ProductContext';
import ProductSreach from './ProductSearch';
import PostSearch from './PostSearch';
const SearchResult = () => {
    const { selectSearch2, searchData } = useContext(ProductContext); 
    return (
        <div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem link="/" label="Trang chủ" />
                            <BreadcrumbItem label="Tìm kiếm" />
                        </Breadcrumb>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="top-list-product d-flex align-items-center">
                            <div className="col-sm-5 d-flex align-items-center">
                                <h2 className="trade-mark-title">KẾT QUẢ TÌM KIẾM</h2><span className="count-product-text">({searchData.length} kết quả)</span>
                            </div>
                            <div className="col-sm-7 d-flex justify-content-end">
                                <a href="#" className="sort-product-btn">Sắp xếp<i class="fa-solid fa-caret-down"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
            searchData == "" ? (
            <div className='search-data-empty text-center my-5'>
                <h4 className="search-data-empty-title">Không có kết quả tìm kiếm phù hợp!</h4>
            </div>) : (
            selectSearch2=="Tin tức" ? 
            (<>
                <div className="container-fluid">
                    <div className="container p-0">
                        <div className="row">
                            <PostSearch post={searchData} />
                        </div>
                    </div>
                </div>
            </>)
             : (
            <>
                <div className="container-fluid">
                    <div className="container p-0">
                        <div className="row">
                            <ProductSreach product={searchData} />
                        </div>
                    </div>
                </div>
            </>
                )
            )
            }
        </div>
    );
};

export default SearchResult;