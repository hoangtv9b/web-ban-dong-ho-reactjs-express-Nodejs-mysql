import React from "react";
import { useContext, useState } from "react";
import { ProductContext } from "./ProductContext";
import { useDispatch }  from "react-redux";
import Modal from "react-bootstrap/Modal";
import { addToCartProduct } from "../js/action/addToCartProduct";
const ProductShow = (props) => {
    const { product, category, quantity, category2 } = props;
    const [showModal, setShowModal] = useState(false);
    const [isAddtoCart, setIsAddToCart] = useState(false);
    const [productExists, setProductExists] = useState(false);
    const [ quantityProductAddCart, setQuantityProductAddCart] = useState(0);
    const handleClose = () => setShowModal(false);
    const [myCart, addToCart] = useState(null);
    // const {} = 
    const disPatch = useDispatch();
    let limit = quantity;
    if (limit === 0) {
        limit = product.length;
    }
    
    const clickAddToCart = (item) => {
        const newItem = {
            nameProduct: item.nameProduct,
            priceProduct: item.priceProduct,
            id: item.id,
            slug: item.slug,
            prmProduct: item.prmProduct,
            quantityPurchased: 1,
            imagesProduct: item.imgProduct
        }
        addToCart(item);
        disPatch(addToCartProduct(newItem));
        setShowModal(true);
        setProductExists(true);
        setIsAddToCart(true);
        setQuantityProductAddCart(quantityProductAddCart+1);
    }
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
            {
            product?.filter((product) => product.categoryProduct === category || product.categoryProduct === category2)
                .slice(0, limit)
                .map((item) => {
                    return (
                        <div className="col-md-3 col-6 my-3">
                            <div className="product-wrap">
                                <div className="card-body">
                                    <a href={item.slug}><img className="card-img-top" src={`http://localhost:8080${item.imgProduct}`} alt="" /></a>
                                    <div className="add-to-cart-hover d-flex justify-content-center align-items-center">
                                        <a href={item.slug} className="detail-product-btn"><i className="fa-solid fa-magnifying-glass"></i></a>
                                        <a onClick={()=> clickAddToCart(item)} className="add-to-cart-btn"><i className="fa-solid fa-cart-shopping"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-title text-center mt-3">
                                <a href={item.slug} className="link-name-product">{item.nameProduct}</a>
                            </div>
                            <div className="card-text text-center">
                                <span className="price">{item.priceProduct?.toLocaleString()} ₫</span><span className="old-price"><del>{item.prmProduct?.toLocaleString()} ₫</del></span>
                            </div>
                        </div>
                    )
                })
            }
        </>
     );
}
 
export default ProductShow;