import React from "react";
import Slider from "react-slick";
import ProductShow from "./ProductShow";
import ProductSlider from "./ProductSlider";
import ProductShowVertical from "./ProductShowVertical";
import PostShowVertical from "./PostShowVertical";
const HomePage = (props) => {
    const { product } = props;
    const { post } = props;
    const PrevArrow = ({ onClick }) => (
        <div className="slider-prev" onClick={onClick}>
            <i className="fa-solid fa-angle-left"></i>
        </div>
        );
    const NextArrow = ({ onClick }) => (
        <div className="slider-next" onClick={onClick}>
            <i className="fa-solid fa-angle-right"></i>
        </div>
        );
    const sliderHeader = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }
    const sliderCustomersReview = {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    }
    return (
        <>
            <div className="container-fluid p-0">
                <Slider {...sliderHeader}>
                    <img className="slide-img" src="/images/slide-1-banner-web-bst-dong-ho-ma-vang.jpg" alt="slide-img" />
                    <img className="slide-img" src="/images/slide-2-lo-co-hay-kin-dao-banner.jpg" alt="slide-img" />
                    <img className="slide-img" src="/images/slide-3-4-xu-huong-thiet-ke-mat-so-dong-ho.jpg" alt="slide-img" />
                </Slider>
            </div>
            <div className="container-fluid my-5">
                <div className="container p-0">
                    <div className="row">
                        <div className="col-md-6">
                            <a href="/dong-ho-nam" className="link-watch-qc">
                                <img className="img-watch-qc" src="/images/custom-banner-qc1-0.jpg" alt="" />
                            </a>
                        </div>
                        <div className="col-md-6">
                            <a href="/dong-ho-nu" className="link-watch-qc">
                                <img className="img-watch-qc" src="/images/custom-banner-qc2.jpg" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="row my-4 px-2">
                        <ul className="nav-title-clearfix d-flex justify-content-center">
                            <li><a href="#">MỚI NHẤT</a></li>
                            <li><a href="#">NỔI BẬT</a></li>
                            <li><a href="#">KHUYẾN MẠI</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row post-container">
                        <ProductSlider product={product} quantity={4} category={"Đồng hồ nam"} category2={"Đồng hồ nữ"} />
                    </div>
                </div>
            </div>
            <div className="container-fluid my-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <a href="#" className="link-sale-product">
                                <img className="img-sale-product" src="/images/custom-qc1-1-1140x107.jpg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <ul className="watch-title">
                        <li><a href="#">ĐỒNG HỒ NAM</a></li>
                    </ul>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row mb-5">
                        <ProductShow product={product} quantity={4} category={"Đồng hồ nam"} />
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <ul className="watch-title">
                        <li><a href="#">THƯƠNG HIỆU</a></li>
                    </ul>
                </div>
            </div>
            <div className="container-fluid my-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <ul className="trademark-title">
                                <li><a href="#">ĐỒNG HỒ NỮ</a></li>
                            </ul>
                            <div className="box-product">
                                <ProductShowVertical product={product} category={"Đồng hồ nữ"} quantity={3} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <ul className="trademark-title">
                                <li><a href="#">ĐỒNG HỒ ĐÔI</a></li>
                            </ul>
                            <div className="box-product">
                                <ProductShowVertical product={product} category={"Đồng hồ đôi"} quantity={3} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <ul className="trademark-title">
                                <li><a href="#">THƯƠNG HIỆU</a></li>
                            </ul>
                            <div className="box-product">
                                <ProductShowVertical product={product} category={"Đồng hồ nam"} quantity={3} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid my-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="item-highlight">
                                <i class="fa-solid fa-truck"></i>
                                <p className="title-highlight">GIAO HÀNG MIỄN PHÍ</p>
                                <p className="desc-highlight">Giao hàng miễn phí cho các hóa đơn trên 500.000đ</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="item-highlight">
                                <i class="fa-solid fa-sack-dollar"></i>
                                <p className="title-highlight">CHÍNH SÁCH HOÀN TIỀN</p>
                                <p className="desc-highlight">Hoàn lại 100% nếu bạn không hài lòng về chất lượng sản phẩm</p>
                                </div>
                            </div>
                        <div className="col-md-4">
                            <div className="item-highlight">
                                <i class="fa-solid fa-gift"></i>
                                <p className="title-highlight">ƯU ĐÃI SẢN PHẨM</p>
                                <p className="desc-highlight">Giúp người tiêu dùng sở hữu sản phẩm với giá ữu đãi tốt</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid background-black pt-5 pb-2">
                <div className="container">
                    <ul className="gallery-title p-0">
                        <li><a className="link-title">BỘ SƯU TẬP</a></li>
                    </ul>
                </div>
                <div className="gallery-wrap px-5 py-2">
                    <div className="gallery-block row">
                        <div className="col-md-6 my-2">
                            <img src="./Images/tet-1-g75201-102-717-6.jpg" alt="" className="border-img-gallery" />
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6 my-2">
                                    <img src="./Images/nh-4-logo-70802-33.jpg" alt="" className="img-gallery border-img-gallery" />
                                </div>
                                <div className="col-md-6 my-2">
                                    <img src="./Images/nh-3-images-1.jpg" alt="" className="img-gallery border-img-gallery" />
                                </div>
                                <div className="col-md-6 my-2">
                                    <img src="./Images/nh-2-dong-ho-co-nam-1.jpg" alt="" className="img-gallery border-img-gallery" />
                                </div>
                                <div className="col-md-6 my-2">
                                    <img src="./Images/nh-1-dong-ho-nu-carnival-1.jpg" alt="" className="img-gallery border-img-gallery" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="watch-title">
                                <li><a href="#">TIN TỨC</a></li>
                            </ul>
                            <div className="box-post">
                                <PostShowVertical post={post} quantity={2} />
                            </div>
                        </div>
                        <div className="col-md-6 position-relative">
                            <ul className="watch-title mb-5">
                                <li><a href="#">Ý KIẾN KHÁCH HÀNG</a></li>
                            </ul>
                            <Slider {...sliderCustomersReview}> 
                                <div className="customer-review-box">
                                    <div className="customer-review-wrap d-flex">
                                        <img className="img-customer" src="/images/custom-khachhang1.jpg" alt="" />
                                        <div className="content-customer-review">
                                            <p className="text-customer-review">Tuy máy tính tôi đang xài không mua ở AUCOM nhưng khi máy tôi hỏng, nhân viên rất nhiệt tình hỗ trợ tôi. Không như mấy chổ khác, câu đầu tiên tôi nhận được là anh mua hàng ở đâu?</p>
                                            <h5 className="name-customer">NGÔ VĂN ĐỘ</h5>
                                            <p className="contact-customer">Web Designer - nhanhoa.com</p>
                                        </div>
                                    </div>
                                    <div className="customer-review-wrap d-flex">
                                        <img className="img-customer" src="/images/custom-khachhang1.jpg" alt="" />
                                        <div className="content-customer-review">
                                            <p className="text-customer-review">Tuy máy tính tôi đang xài không mua ở AUCOM nhưng khi máy tôi hỏng, nhân viên rất nhiệt tình hỗ trợ tôi. Không như mấy chổ khác, câu đầu tiên tôi nhận được là anh mua hàng ở đâu?</p>
                                            <h5 className="name-customer">NGÔ VĂN ĐỘ</h5>
                                            <p className="contact-customer">Web Designer - nhanhoa.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="customer-review-box">
                                    <div className="customer-review-wrap d-flex">
                                        <img className="img-customer" src="/images/custom-khachhang1.jpg" alt="" />
                                        <div className="content-customer-review">
                                            <p className="text-customer-review">Tuy máy tính tôi đang xài không mua ở AUCOM nhưng khi máy tôi hỏng, nhân viên rất nhiệt tình hỗ trợ tôi. Không như mấy chổ khác, câu đầu tiên tôi nhận được là anh mua hàng ở đâu?</p>
                                            <h5 className="name-customer">NGÔ VĂN ĐỘ</h5>
                                            <p className="contact-customer">Web Designer - nhanhoa.com</p>
                                        </div>
                                    </div>
                                    <div className="customer-review-wrap d-flex">
                                        <img className="img-customer" src="/images/custom-khachhang1.jpg" alt="" />
                                        <div className="content-customer-review">
                                            <p className="text-customer-review">Tuy máy tính tôi đang xài không mua ở AUCOM nhưng khi máy tôi hỏng, nhân viên rất nhiệt tình hỗ trợ tôi. Không như mấy chổ khác, câu đầu tiên tôi nhận được là anh mua hàng ở đâu?</p>
                                            <h5 className="name-customer">NGÔ VĂN ĐỘ</h5>
                                            <p className="contact-customer">Web Designer - nhanhoa.com</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default HomePage;