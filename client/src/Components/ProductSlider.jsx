import React from "react";
import Slider from "react-slick";
import { useState } from "react";
import { useDispatch }  from "react-redux";
import Modal from "react-bootstrap/Modal";
import { addToCartProduct } from "../js/action/addToCartProduct";
const ProductSlider = (props) => {
    const { product, category2, quantity, category } = props;
    const [showModal, setShowModal] = useState(false);
    const [isAddtoCart, setIsAddToCart] = useState(false);
    const [productExists, setProductExists] = useState(false);
    const handleClose = () => setShowModal(false);
    const [myCart, addToCart] = useState(null);
    const disPatch = useDispatch();
    const clickAddToCart = (item) => {
        const newItem = {
            nameProduct: item.nameProduct,
            priceProduct: item.priceProduct,
            prmProduct: item.prmProduct,
            id: item.id,
            slug: item.slug,
            quantityPurchased: 1,
            imagesProduct: item.imgProduct
        }
        addToCart(item);
        disPatch(addToCartProduct(newItem));
        setShowModal(true);
        setProductExists(true);
        setIsAddToCart(true);
    }
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
    var sliderProduct = {
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow:3,
                    slidesToScroll: 1,
                } 
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return ( 
        <>
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
                                        <span className="price-product-cart">{myCart.priceProduct.toLocaleString()}</span>
                                        <span className="prm-product-cart"><del>{myCart.prmProduct.toLocaleString()}</del></span>
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
            <Slider {...sliderProduct}>
                {
                    product?.filter((product) => product.categoryProduct === category || product.categoryProduct === category2)
                    .slice(0, quantity)
                    .map((product) => {
                        return (
                                <div className="col-md-3">
                                    <div className="p-3 mx-2 product-wrap">
                                        <div className="card-body">
                                            <a href={product.slug} className="link-img-product-slider">
                                                <img className="card-img-top" src={`http://localhost:8080${product.imgProduct}`} alt="img-product" />
                                            </a>
                                            <div className="card-title">
                                                <a href={product.slug} className="link-name-product">{product.nameProduct}</a>
                                            </div>
                                            <div className="card-text">
                                                <p className="price">{product.priceProduct?.toLocaleString()} ₫</p>
                                                <p className="old-price"><del>{product.prmProduct?.toLocaleString()} ₫</del></p>
                                            </div>
                                            <div className="card-text">
                                                <label className="note-product mb-3">
                                                    Nhiệt độ sử dụng đồng hồ an toàn từ 10 độ C đến 40 độ C.-  Khi không sử dụng, hãy tháo đồng hồ ra khỏi tay, cất...
                                                </label>
                                            </div>
                                            <div className="add-to-cart-hover d-flex justify-content-center align-items-center">
                                                <a href={product.slug} className="detail-product-btn"><i className="fa-solid fa-magnifying-glass"></i></a>
                                                <a onClick={()=> clickAddToCart(product)} className="add-to-cart-btn"><i className="fa-solid fa-cart-shopping"></i></a>
                                            </div>
                                            <span className="sale-product">-30%</span>
                                        </div>
                                    </div>
                                </div>
                            )
                    })
                }
            </Slider>
        </>
     );
}
 
export default ProductSlider;