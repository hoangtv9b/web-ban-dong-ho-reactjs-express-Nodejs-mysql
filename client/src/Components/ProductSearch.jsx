import { useContext, useState } from "react";
import { ProductContext } from "./ProductContext";
import { useDispatch }  from "react-redux";
import Modal from "react-bootstrap/Modal";
import { addToCartProduct } from "../js/action/addToCartProduct";
const ProductSreach = (props) => {
    const { product } = props;
    const [quantityPurchased, setQuantityPurchased] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [isAddtoCart, setIsAddToCart] = useState(false);
    const [productExists, setProductExists] = useState(false);
    const [ quantityProductAddCart, setQuantityProductAddCart] = useState(0);
    const handleClose = () => setShowModal(false);
    const {addToCart, setToTal, myCart} = useContext(ProductContext);
    const disPatch = useDispatch();
    const clickAddToCart = (item) => {
        const newItem = {
            nameProduct: item.nameProduct,
            priceProduct: item.priceProduct,
            prmProduct: item.prmProduct,
            id: item.id,
            quantityPurchased: quantityPurchased,
            imagesProduct: item.imgProduct
        }
        addToCart((item)=>[...item, newItem]);
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
                    isAddtoCart ? (
                        <div className="product-cart-block">
                            <div className="product-cart-wrap d-flex">
                                <a href="#"><img className="img-product-cart" src={`http://localhost:8080${myCart[1].imagesProduct}`} alt="img-product" /></a>
                                <div className="info-product-wrap mx-4">
                                    <a href="#"><p className="name-product-cart">{myCart[1].nameProduct}</p></a>
                                    <p className="add-to-cart-text">Được thêm vào giở hàng của bạn</p>
                                    <span className="price-product-cart">{myCart[1].priceProduct.toLocaleString()}</span>
                                    <span className="prm-product-cart"><del>{myCart[1].prmProduct.toLocaleString()}</del></span>
                                    <div className="btn-cart-wrap d-flex mt-2">
                                        <a href="/gio-hang" className="btn-add-to-cart"><i class="fa fa-shopping-basket" aria-hidden="true"></i>Xem giỏ hàng</a>
                                        <div onClick={handleClose} className="btn-continue">Tiếp tục mua hàng</div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="btn-see-cart-wrap text-end">
                                <div className="btn btn-primary">Xem giỏ hàng</div>
                            </div> */}
                        </div>
                        ) : (
                        <p className="cart-empty">Giỏ hàng trống!</p>
                        )
                    }
                </Modal.Body>
            </Modal>
            {product.map((product)=>{
                return (
                    <div className="col-md-3 col-6 my-3">
                        <div className="product-wrap">
                            <div className="card-body">
                                <a href={product.slug}><img className="card-img-top" src={`http://localhost:8080${product.imgProduct}`} alt="" /></a>
                                <div className="add-to-cart-hover d-flex justify-content-center align-items-center">
                                    <a href={product.slug} className="detail-product-btn"><i className="fa-solid fa-magnifying-glass"></i></a>
                                    <a onClick={()=> clickAddToCart(product)} className="add-to-cart-btn"><i className="fa-solid fa-cart-shopping"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="card-title text-center mt-3">
                            <a href={product.slug} className="link-name-product">{product.nameProduct}</a>
                        </div>
                        <div className="card-text text-center">
                            <span className="price">{product.priceProduct && product.priceProduct.toLocaleString()} đ</span><span className="old-price"><del>{product.prmProduct && product.prmProduct.toLocaleString()} đ</del></span>
                        </div>
                    </div>
                )
            })
            }
        </>
     );
}
 
export default ProductSreach;