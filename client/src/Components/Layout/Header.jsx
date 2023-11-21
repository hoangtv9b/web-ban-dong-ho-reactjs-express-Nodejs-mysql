import React, { useContext, useEffect, useState, useRef } from "react";
import Modal from 'react-bootstrap/Modal';
import { ProductContext } from "../ProductContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch }  from "react-redux";
import Cookies from "js-cookie";
import { loginUser } from "../../js/action/loginUser";
import { logOutUser } from "../../js/action/logOutUser";
// import Cookies from "js-cookie";
import { removeFromCart } from "../../js/action/removeFromCart";
const Header = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const getUser = useSelector((state) => state.user.loginUser);
    const selectSearchRef = useRef(null);
    const [nameUser, setNameUser] = useState("");
    const [activeNotify, setAciveNotify] = useState(0);
    const [activeNotify2, setAciveNotify2] = useState(0);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [register, setRegister] = useState({});
    const [dataLogin, setDataLogin] = useState({});
    const disPatch = useDispatch();
    const totalItems = useSelector((state) => state.cart.total);
    const [productExist, setProductExist] = useState(true);
    const { searchKeyWord, setSearchKeyWord, selectSearch, setSelectSearch, searchData, setSearchData, setSelectSearch2 } = useContext(ProductContext);
    const [isAddtoCart, setIsAddToCart] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);    
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [ windowHeight, setWindowHeight ] = useState(window.innerHeight);
    const [displayOutside, setDisplayOutside] = useState("none");
    const [animationState, setAnimationState] = useState("-100%");
    const removeFromCartProduct = (item) => {
        disPatch(removeFromCart(item.id));
    }
    const btnNavbarMobileHidden = () => {
        setAnimationState("-100%");
        setDisplayOutside("none");
    }
    const btnNavbarMobileShow = () => {
        setAnimationState("0");
        setDisplayOutside("block");
    }
    useEffect(()=>{
        if(cartItems.length > 0){
            setProductExist(true);
        }else{
            setProductExist(false)
        }
    })
    useEffect(()=>{
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };
        window.addEventListener('resize', handleResize);
    }, [])
    const handleClose = () => setShowModal(false);
    const handleLoginClose = () => setShowLoginModal(false);
    const handleActiveNotify = () => {
        setAciveNotify(1);
        setTimeout(()=>{
            setAciveNotify(0);
        }, 2000)
    }
    const handleActiveNotify2 = () => {
        setAciveNotify2(1);
        setTimeout(()=>{
            setAciveNotify2(0);
        }, 2000)
    }
    const handleSignUpClose = () => {
        setShowSignUpModal(false)
        setIsPassword(false)
        setIsEmail(false)
    }
    const handleShow = () => {
        setShowModal(true);
        setIsAddToCart(true);
    };
    const handleLoginShow = () => {
        setShowLoginModal(true)
    }
    const handleSignUpShow = () => {
        setShowSignUpModal(true)
    }
    const handleToggle = () => {
        setIsVisible(!isVisible);
    };
    const handleClickOutside = (event) => {
        if (selectSearchRef.current && !selectSearchRef.current.contains(event.target)) {
          setIsVisible(false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    const handleInputChange = (event) => {
        setSearchKeyWord(prevState => ({...prevState, search: event.target.value}));
    }
    const navigate = useNavigate();
    useEffect(()=>{
        setSearchKeyWord(prevState=>({...prevState, selectSearch: selectSearch}));
    }, [selectSearch])
    const handleSubmitChange = async (event) => {
        setSelectSearch2(selectSearch);
        event.preventDefault();
        try{
            const response = await axios.post("/api/search", searchKeyWord);
            if(response.data){
                setSearchData(response.data);
                navigate("/search");
            }
        }catch(error){
            console.log(error)
        }
    }
    const handleRegisterChange = (event) => {
        setRegister({...register, [event.target.name]: event.target.value});
    }
    const handleLoginChange = (event) => {
        setDataLogin({...dataLogin, [event.target.name]: event.target.value});
    }
    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.post("/api/loginUser", dataLogin)
            const accessToken = response.data.accessToken;
            const nameUser = response.data.username;
            const newItem = {
                nameUser: nameUser
            }
            disPatch(loginUser(newItem))
            handleActiveNotify2()
            handleLoginClose()
            setIsLogin(false)
            setLoginSuccess(true)
        }catch(error){
            console.log(error)
            setIsLogin(true)
        }
    }
    const handleRegisterSubmit = async (event) => {
        event.preventDefault();
        if(register.password !== register.password2){
            setIsPassword(true);
        }else{
            setIsPassword(false);
            await axios.post("/api/registerUser", register)
                .then( response =>{
                    setIsEmail(false)
                    handleActiveNotify();
                    handleSignUpClose();
                })
                .catch((error)=>{
                    setIsEmail(true)
                    console.log(error)
                })

        }
    }
    return (
        <>
{/* navbar top */}
        <div className="header-wrap">
            <div className="container-fluid navbar-header-custom">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-6">
                            <ul className="hotline-top d-flex">
                                <li className="items-hotline-top">
                                    <a href="tel:" className="phone-contact"><i className="fa-solid fa-phone"></i>(024) 7308 6680</a>
                                </li>
                                <li className="items-hotline-top">
                                    <span className="email-contact"><i className="fa-solid fa-envelope"></i>contact@sm4s.vn</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <ul className="hotline-top d-flex">
                                <li className="items-hotline-top">
                                    {getUser ? (
                                        <>
                                            <span>Xin chào {getUser.nameUser}</span> <a href="#" onClick={()=>{disPatch(logOutUser())}} className="log-out-user">đăng xuất</a>
                                        </>
                                        ) : (
                                        <>
                                            <span onClick={handleLoginShow} className="btn-login">đăng nhập</span><span> / </span><span onClick={handleSignUpShow} className="btn-sign-up">đăng ký tài khoản</span>
                                        </>
                                        )
                                    }
                                </li>
                                <li className="items-hotline-top">
                                <img className="img-switch-language" src="images/viet-nam-flag-vi.jpg" alt="" />
                                    <span className="btn-switch-language">Việt Nam<i className="fa-solid fa-caret-down"></i></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* header top menu */}
            <div className="container-fluid p-1">
                <div className="container">
                    <div className="row header-top-menu">
                        <div className="col-md-6">
                            <div className="search-form mt-3">
                                <form className="d-flex" method="post">
                                    <input type="text" name="search" onChange={handleInputChange} placeholder="Từ khóa tìm kiếm" className="input-text-search" />
                                    <div onClick={handleToggle} ref={selectSearchRef} className="select-product-btn d-flex align-items-center justify-content-center">{selectSearch}<i className="fa-solid fa-caret-down" />
                                        {isVisible && <div className="select-search-wrap">
                                            <div onClick={()=>setSelectSearch("Sản phẩm")} className="select-search-item">Sản phẩm</div>
                                            <div onClick={()=>setSelectSearch("Tin tức")} className="select-search-item">Tin tức</div>
                                        </div>
                                        }
                                    </div>
                                    <button onClick={handleSubmitChange} className="submit-search-form"><i className="fa-solid fa-magnifying-glass" /></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <a href="/"><img className="logo-header" src="images/i-n-may-logo-black-318-163-0.png" alt /></a>
                        </div>
                        <div className="col-md-3">
                            <div className="cart-btn-wrap mt-4 text-end">
                                <a className="cart-btn" variant="primary" onClick={handleShow}><i className="fa-solid fa-cart-shopping" />Giỏ hàng<div className="quantity-product-cart">{cartItems ? cartItems.length : 0}</div></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* navbar header */}
            <div className="container-fluid navbar-header-container">
                <div className="row">
                    <ul className="navbar-header d-flex justify-content-center align-items-center">
                        <li className="nav-item"><a href="/">TRANG CHỦ</a></li>
                        <li className="nav-item"><a href="/dong-ho-nam">ĐỒNG HỒ NAM</a></li>
                        <li className="nav-item"><a href="/dong-ho-nu">ĐỒNG HỒ NỮ</a></li>
                        <li className="nav-item nav-item-hover"><a href="/thuong-hieu" className="link-nav-item-hover">THƯƠNG HIỆU</a>
                            <ul className="child-navbar col-4 d-flex">
                                <li className="col-sm-3 child-navbar-column">
                                    <a href="#" className="title-child-navbar">Đồng hồ OP</a>
                                    <ul className="clear-fix mt-3">
                                        <li><a href="#">Đồng hồ Olym</a></li>
                                        <li><a href="#">Đồng hồ Onigal</a></li>
                                    </ul>
                                </li>
                                <li className="col-sm-3 child-navbar-column">
                                    <a href="#" className="title-child-navbar">Đồng hồ OP</a>
                                    <ul className="clear-fix mt-3">
                                        <li><a href="#">Đồng hồ Olym</a></li>
                                        <li><a href="#">Đồng hồ Onigal</a></li>
                                    </ul>
                                </li>
                                <li className="col-sm-3 child-navbar-column">
                                    <a href="#" className="title-child-navbar">Đồng hồ OP</a>
                                    <ul className="clear-fix mt-3">
                                        <li><a href="#">Đồng hồ Olym</a></li>
                                        <li><a href="#">Đồng hồ Onigal</a></li>
                                    </ul>
                                </li>
                                <li className="col-sm-3 child-navbar-column">
                                    <a href="#" className="title-child-navbar">Đồng hồ OP</a>
                                    <ul className="clear-fix mt-3">
                                        <li><a href="#">Đồng hồ Olym</a></li>
                                        <li><a href="#">Đồng hồ Onigal</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item"><a href="/dong-ho-doi">ĐỒNG HỒ ĐÔI</a></li>
                        <li className="nav-item"><a href="/phu-kien">PHỤ KIỆN ĐỒNG HỒ</a></li>
                        <li className="nav-item"><a href="/tin-tuc">TIN TỨC</a></li>
                        <li className="nav-item"><a href="/lien-he">LIÊN HỆ</a></li>
                    </ul>
                </div>
            </div>
        </div>    
{/* notify */}
            <div className="back-ground-white" style={{ opacity: `${activeNotify}` }}>
                <div className="notification">Tạo tài khoản thành công. Vui lòng đăng nhập!</div>
            </div>
            <div className="back-ground-white" style={{ opacity: `${activeNotify2}` }}>
                <div className="notification">Đăng nhập thành công</div>
            </div>            
{/* modal cart */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Giỏ hàng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {
                    productExist ? (
                        <>
                            {cartItems.map((item)=>{
                                return(
                                    <div className="product-cart-block">
                                        <div className="product-cart-wrap d-flex">
                                            <a href={item.slug}><img className="img-product-cart" src={`http://localhost:8080${item.imagesProduct}`} alt="img-product" /></a>
                                            <div className="info-product-wrap mx-4">
                                                <a href={item.slug}><p className="name-product-cart">{item.nameProduct}</p></a>
                                                <span className="price-product-cart">{item?.quantityPurchased} x </span>
                                                <span className="price-product-cart">{item.priceProduct?.toLocaleString()} đ</span>
                                            </div>
                                            <div className="remove-cart-product-wrap text-end">
                                                <div className="remove-product-cart" onClick={()=>removeFromCartProduct(item)}><i class="fa-solid fa-x"></i></div>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                )
                            })}
                            <div className="footer-cart">
                                <div className="total-wrap d-flex justify-content-between">
                                    <span className="into-monney">Thành tiền: </span>
                                    <p className="total-amount">{totalItems?.toLocaleString()} đ</p>
                                </div>
                                <a href="/gio-hang" className="btn btn-primary btn-info-cart text-center">Thông tin giỏ hàng</a>
                            </div>
                        </>
                    ) : (
                        <div className="cart-empty-wrap text-center">
                            <p className="cart-empty">Giỏ hàng trống!</p>
                        </div>
                    )
                }
                
                </Modal.Body>
            </Modal>
{/*  modal login */}
            <Modal size="sm" show={showLoginModal} onHide={handleLoginClose}>
                <Modal.Header>
                    <Modal.Title>
                        Đăng nhập
                    </Modal.Title>
                    <div className="close-modal-btn" onClick={handleLoginClose}><i class="fa fa-times" aria-hidden="true"></i></div>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleLoginSubmit}>
                        <div className="form-group">
                            <input type="text" name="nameLogin" onChange={handleLoginChange} className="login-modal-input" placeholder="Tên đăng nhập hoặc email" />
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" onChange={handleLoginChange} className="login-modal-input" placeholder="Mật khẩu" />
                            {isLogin && <div style={{ fontSize: '14px' }}>Sai thông tin đăng nhập!</div>}
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn-submit-form-login-modal">
                                <i className="fa fa-sign-in"></i>Đăng nhập
                            </button>
                        </div>
                        <div className="form-group">
                            <p className="or-title-modal-login my-2">
                                OR
                            </p>
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-primary btn-sign-in-with"><i class="fa-brands fa-facebook-f icon-btn"></i>Đăng nhập bằng facebook</button>
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-danger btn-sign-in-with"><i className="fa-brands fa-google icon-btn"></i>Đăng nhập bằng google</button>
                        </div>
                        <div className="form-group mb-2">
                            <a onClick={()=>{
                                handleSignUpShow()
                                handleLoginClose()
                            }} className="sign-up-link">Đăng ký tài khoản</a>
                            <a href="#" className="reset-password-link">Quên mật khẩu</a>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
{/* modal signup */}
            <Modal size="md" show={showSignUpModal} onHide={handleSignUpClose}>
                <Modal.Header>
                    <Modal.Title>
                        Đăng ký tài khoản
                    </Modal.Title>
                    <div className="close-modal-btn" onClick={handleSignUpClose}><i class="fa fa-times" aria-hidden="true"></i></div>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleRegisterSubmit}>
                        <div className="row">
                            <div className="col-md-6 col-6 form-group">
                                <input type="text" name="namelogin" onChange={handleRegisterChange} id="" className="sign-up-modal-input" placeholder="Tên đăng nhập" required />
                                <span class="icon-required">*</span>
                            </div>
                            <div className="col-md-6 col-6 form-group">
                                <input type="text" name="username" onChange={handleRegisterChange} id="" className="sign-up-modal-input" placeholder="Họ và tên" required />
                                <span class="icon-required">*</span>
                            </div>
                            <div className="col-md-6 col-6 form-group">
                                <input type="password" name="password" onChange={handleRegisterChange} id="" className="sign-up-modal-input" placeholder="Mật khẩu" required />
                                <span class="icon-required">*</span>
                            </div>
                            <div className="col-md-6 col-6 form-group">
                                <input type="password" name="password2" onChange={handleRegisterChange} id="" className="sign-up-modal-input" placeholder="Nhập lại mật khẩu" required />
                                <span class="icon-required">*</span>
                                {isPassword && <div style={{ fontSize: '14px' }}>Mật khẩu nhập lại không khớp!</div>}
                            </div>
                            <div className="col-md-6 col-6 form-group">
                                <input type="text" name="email" onChange={handleRegisterChange} id="" className="sign-up-modal-input" placeholder="Email" required />
                                <span class="icon-required">*</span>
                                {isEmail && <div>Email này đã được sử dụng!</div>}
                            </div>
                            <div className="col-md-6 col-6 form-group">
                                <input type="text" name="numberphone" onChange={handleRegisterChange} id="" className="sign-up-modal-input" placeholder="Số điện thoại" required />
                                <span class="icon-required">*</span>
                            </div>
                            <div className="col-md-6 mt-2">
                                <button type="submit" className="btn btn-danger btn-modal btn-signup-submit"><i className="fa-regular fa-circle-check"></i>Đăng ký</button>
                                <button type="button" onClick={handleSignUpClose} className="btn btn-success btn-modal btn-cancel"><i class="fa-solid fa-xmark"></i>Hủy bỏ</button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
{/* header mobile */}
            <div className="header-mobile-wrap">
                <div className="container-fluid navbar-header-custom">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="d-flex justify-content-end p-0">
                                <ul className="hotline-top d-flex">
                                    <li className="items-hotline-top">
                                        {getUser ? (
                                            <>
                                                <span>Xin chào {getUser.nameUser}</span> <a href="#" onClick={()=>{disPatch(logOutUser())}} className="log-out-user">đăng xuất</a>
                                            </>
                                            ) : (
                                            <>
                                                <span onClick={handleLoginShow} className="btn-login">đăng nhập</span><span> / </span><span onClick={handleSignUpShow} className="btn-sign-up">đăng ký tài khoản</span>
                                            </>
                                            )
                                        }
                                    </li>
                                    <li className="items-hotline-top">
                                    <img className="img-switch-language" src="images/viet-nam-flag-vi.jpg" alt="" />
                                        <span className="btn-switch-language">Việt Nam<i className="fa-solid fa-caret-down"></i></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid header-top-menu-mobile p-0">
                    <div className="d-flex justify-content-between">
                        <div className="btn-menu-mobile" onClick={btnNavbarMobileShow}><i class="fa-solid fa-bars"></i></div>
                        <a className="cart-btn cart-btn-mobile" variant="primary" onClick={handleShow}><i className="fa-solid fa-cart-shopping icon-cart-mobile" />Giỏ hàng<div className="quantity-product-cart quantity-product-cart-mobile">{cartItems ? cartItems.length : 0}</div></a>
                    </div>
                </div>
                <div className="container-fluid search-header">
                    <div className="row">
                        <div className="col-12">
                            <div className="p-3 d-flex justify-content-center">
                                <form className="d-flex" method="post">
                                    <input type="text" name="search" onChange={handleInputChange} placeholder="Từ khóa tìm kiếm" className="input-text-search" />
                                    <div onClick={handleToggle} ref={selectSearchRef} className="select-product-btn d-flex align-items-center justify-content-center">{selectSearch}<i className="fa-solid fa-caret-down" />
                                        {isVisible && <div className="select-search-wrap">
                                            <div onClick={()=>setSelectSearch("Sản phẩm")} className="select-search-item">Sản phẩm</div>
                                            <div onClick={()=>setSelectSearch("Tin tức")} className="select-search-item">Tin tức</div>
                                        </div>
                                        }
                                    </div>
                                    <button onClick={handleSubmitChange} className="submit-search-form"><i className="fa-solid fa-magnifying-glass" /></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="img-logo-header text-center">
                                <a href="/"><img className="logo-header" src="images/i-n-may-logo-black-318-163-0.png" alt /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
{/* navbar mobile */}
            <div className="out-side-click" onClick={btnNavbarMobileHidden} style={{ height: `${windowHeight}`, display: `${displayOutside}` }}></div>
            <div className="menu-responsive"style={{ height: `${windowHeight}px`, left: `${animationState}` }}>
                <div className="title-navbar-wrap d-flex justify-content-between align-items-center">
                    <h4 className="title-navbar-mobile">MENU CHÍNH</h4>
                    <div className="btn-close-navbar" onClick={btnNavbarMobileHidden}><i class="fa-solid fa-xmark"></i></div>
                </div>
                <ul className="navbar-header-mobile p-0">
                    <li><a href="#" className="link-navbar-mobile link-navbar-mobile-fistchild"><i class="fa-solid fa-house"></i> <span> | </span>Trang chủ</a></li>
                    <li><a href="/dong-ho-nam" className="link-navbar-mobile">Đồng hồ nam</a></li>
                    <li><a href="/dong-ho-nu" className="link-navbar-mobile">Đồng hồ nữ</a></li>
                    <li><a href="/thuong-hieu" className="link-navbar-mobile">Thương hiệu<i class="fa-sharp fa-solid fa-caret-down ml-1"></i></a></li>
                    <li><a href="/dong-ho-doi" className="link-navbar-mobile">Đồng hồ đôi</a></li>
                    <li><a href="/phu-kien" className="link-navbar-mobile">Phụ kiện đồng hồ</a></li>
                    <li><a href="/tin-tuc" className="link-navbar-mobile">Tin tức</a></li>
                    <li><a href="/lien-he" className="link-navbar-mobile">Liên hệ</a></li>
                </ul>
            </div>
        </>
    );
}
export default Header;