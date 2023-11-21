import React, { useState, useEffect, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { Breadcrumb, BreadcrumbItem } from "./Breadcumb";
import { ProductContext } from "./ProductContext";
import Slider from "react-slick";
import ProductShow from "./ProductShow";
import { useDispatch }  from "react-redux";
import { addToCartProduct } from "../js/action/addToCartProduct";
const DetailProduct = (props) => {
    const [myCart, addToCart] = useState(null);
    const [quantityPurchased, setQuantityPurchased] = useState(1);
    const [ quantityProductAddCart, setQuantityProductAddCart] = useState(0);
    const [isAddtoCart, setIsAddToCart] = useState(false);
    const [productExists, setProductExists] = useState(false);
    const { products } = props; 
    const { product } = props;
    const { imagesProduct } = props;
    const [showModal, setShowModal] = useState(false);
    const disPatch = useDispatch();
    const handleClose = () => setShowModal(false);
    const sliderImgProduct = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }
    const clickAddToCart = (item) => {
        const newItem = {
            nameProduct: item.nameProduct,
            priceProduct: item.priceProduct,
            id: item.id,
            prmProduct: item.prmProduct,
            quantityPurchased: quantityPurchased,
            imagesProduct: item.imgProduct
        }
        addToCart(item);
        disPatch(addToCartProduct(newItem));
        setShowModal(true);
        setProductExists(true);
        setIsAddToCart(true);
        setQuantityProductAddCart(quantityProductAddCart+1);
    } 
    const btnIncre = () => {
        setQuantityPurchased(quantityPurchased + 1);
    }
    const btnReduce = () => {
        if(quantityPurchased > 1){
            setQuantityPurchased(quantityPurchased - 1);
        }
    }
    return ( 
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem link="/" label="Trang chủ" />
                            <BreadcrumbItem link="/dong-ho-nu" label={product.categoryProduct} />
                        </Breadcrumb>
                    </div>
                </div>
            </div>
            <Modal show={showModal} size="md" onHide={handleClose}>
                <Modal.Body>
                    <div className="close-modal-btn" onClick={handleClose}><i class="fa fa-times" aria-hidden="true"></i></div>
                    {
                    isAddtoCart && myCart && (
                        <div className="product-cart-block">
                            <div className="product-cart-wrap d-flex">
                                <a href={myCart.slug}><img className="img-product-cart" src={`http://localhost:8080${myCart.imgProduct}`} alt="img-product" /></a>
                                <div className="info-product-wrap mx-4">
                                    <a href={myCart.slug}><p className="name-product-cart">{myCart.nameProduct}</p></a>
                                    <p className="add-to-cart-text">Được thêm vào giở hàng của bạn</p>
                                    <span className="price-product-cart">{myCart.priceProduct.toLocaleString()} đ</span>
                                    <span className="prm-product-cart"><del>{myCart.prmProduct.toLocaleString()} đ</del></span>
                                    <div className="btn-cart-wrap d-flex mt-2">
                                        <a href="/gio-hang" className="btn-add-to-cart"><i class="fa fa-shopping-basket" aria-hidden="true"></i>Xem giỏ hàng</a>
                                        <div onClick={handleClose} className="btn-continue">Tiếp tục mua hàng</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </Modal.Body>
            </Modal>
            <div className="container-fluid">
                <div className="container mt-3 mb-5">
                    <div className="row">
                        <div className="col-md-5 col-12">
                            <div className="slider-img-product">
                                <Slider {...sliderImgProduct}>
                                    <img src={product.imgProduct} alt="img-product" />
                                    {imagesProduct.map((item) => {
                                        if(item.idProduct === product.id){
                                            return (<img src={`http://localhost:8080${item.linkimages}`} alt="img-product" />)
                                        }
                                    })}
                                </Slider>
                            </div>
                        </div>
                        <div className="col-md-7 col-12">
                            <h4 className="title-name-product my-2">
                                {product.nameProduct}
                            </h4>
                            <div className="code-product-wrap">
                                <span className="code-product-title">Mã sản phẩm: </span><span className="code-product">{product.codeProduct}</span>
                            </div>
                            <hr className="line-detail-product" />
                            <div className="price-product-wrap">
                                <span className="price-product">{product.priceProduct?.toLocaleString()} đ</span><span className="prm-price"><del>{product.prmProduct?.toLocaleString()} ₫</del></span><span className="tag-discount"> Giảm giá 16%</span>
                            </div>
                            <div className="description-detail-product-wrap">
                                <label htmlFor="" className="description-detail-product my-3">
                                -  Nhiệt độ sử dụng đồng hồ an toàn từ 10 độ C đến 40 độ C. <br />-  Khi không sử dụng, hãy tháo đồng hồ ra khỏi tay, cất vào nơi an toàn, tránh xa tầm tay của trẻ em. <br />Với chiếc đồng hồ cơ tự động bạn phải thường xuyên sử dụng đồng hồ, cử động tay đeo nhiều để bộ lên dây cót tự động nạp được năng lượng.
                                </label>
                            </div>
                            <div className="row">
                                <div className="col-md-6 d-flex justify-content-between my-2">
                                    <div className="quantity-wrap">
                                        <button className="btn-input-quantity" onClick={btnReduce}>-</button>
                                        <input type="text" name="" id="" value={quantityPurchased} className="input-quantity" />
                                        <button className="btn-input-quantity" onClick={btnIncre}>+</button>
                                    </div>
                                    <a className="btn-add-cart" onClick={()=> clickAddToCart(product)}><i class="fa-solid fa-cart-arrow-down"></i>Thêm vào giỏ hàng</a>
                                </div>
                                <div className="col-md-6 my-2">
                                    <div className="btn-detail-wrap">
                                        <a href="#" className="btn-detail btn-advise">TƯ VẤN : 0904273626</a>
                                    </div>
                                </div>
                                <div className="col-md-6 my-2">
                                    <div className="btn-detail-wrap">
                                        <a href="#" className="btn-detail btn-contact-email">LIÊN HỆ EMAIL</a>
                                    </div>
                                </div>
                                <div className="col-md-6 my-2">
                                    <div className="btn-detail-wrap">
                                        <a href="#" className="btn-detail btn-chat-facebook"><i class="fa-brands fa-facebook-f"></i>CHAT FACEBOOK</a>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="contact-operate">
                                        <a href="#" className="contact-link"><strong>Liên hệ hợp tác</strong></a>
                                        <p>(Gia công, sản xuất, bao tiêu, chuyển giao công nghệ...)</p>
                                    </div>
                                </div>
                                <form className="form-pay my-3">
                                    <div className="col-md-12 text-center">
                                        <h4 className="tite-form-pay">Nhập thông tin thanh toán</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 input-item">
                                            <input type="text" className="tab-input m-0" name="" placeholder="Họ và tên" id="" />
                                        </div>
                                        <div className="col-md-4 input-item">
                                            <input type="text" className="tab-input m-0" name="" placeholder="Số điện thoại" id="" />
                                        </div>
                                        <div className="col-md-4 input-item">
                                            <input type="email" className="tab-input m-0" name="" placeholder="Địa chỉ email" id="" />
                                        </div>
                                        <div className="col-md-12 input-item">
                                            <textarea name="" placeholder="Địa chỉ" className="tab-textarea m-0" id="" cols="30" rows="2"></textarea>
                                        </div>
                                        <div className="col-md-12 input-item">
                                            <textarea name="" className="tab-textarea m-0" placeholder="Ghi chú" id="" cols="30" rows="2"></textarea>
                                        </div>
                                        <div className="col-md-12 text-end">
                                            <button className="btn btn-success btn-submit-pay" type="submit">Tiếp tục thanh toán<i class="fa-solid fa-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <ul className="watch-title">
                        <li><a href="#">MÔ TẢ</a></li>
                    </ul>
                    <label htmlFor="" className="detail-product-text mb-5">
                    -  Tránh va đập đồng hồ vào vật cứng hoặc làm rơi vỡ đồng hồ. <br />
                    -  Không sử dụng đồng hồ khi rửa tay bằng nước nóng, đi tắm, đi bơi, xông hơi. <br />
                    -  Không để đồng hồ gần những nơi phát ra từ trường mạnh như: ti vi, loa thùng, dàn âm thanh, nam châm, bộ phát wifi <br />
                    -  Nhiệt độ sử dụng đồng hồ an toàn từ 10 độ C đến 40 độ C. <br />
                    -  Khi không sử dụng, hãy tháo đồng hồ ra khỏi tay, cất vào nơi an toàn, tránh xa tầm tay của trẻ em. <br />
                    -  Với chiếc đồng hồ cơ tự động bạn phải thường xuyên sử dụng đồng hồ, cử động tay đeo nhiều để bộ lên dây cót tự động nạp được năng lượng. <br />
                    - Tránh đeo đồng hồ khi vận động mạnh như đánh bong, đá bóng…
                    </label>
                    <ul className="watch-title">
                        <li><a href="#">SẢN PHẨM CÙNG LOẠI</a></li>
                    </ul>
                    <div className="row mb-5">
                        <ProductShow category={product.categoryProduct} quantity={4} product={products} />
                    </div>
                </div>
            </div>

        </>
     );
}
 
export default DetailProduct;