import React from "react";
import { Breadcrumb, BreadcrumbItem } from "./Breadcumb";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../js/action/removeFromCart";
const Cart = () => {
    const [cities, setCities] = useState([]);
    const disPatch = useDispatch();
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalItems = useSelector((state) => state.cart.total);
    const removeFromCartProduct = (item) => {
        disPatch(removeFromCart(item.id));
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json');
                setCities(response.data);
            } catch (error) {
                console.error('Error: ', error);
            }
        };
        fetchData();
    }, []);

    const handleCityChange = (e) => {
        const cityId = e.target.value;
        const selectedCity = cities.find(city => city.Id === cityId);
        setDistricts(selectedCity ? selectedCity.Districts : []);
        setWards([]);
    };
    const handleDistrictChange = (e) => {
        const districtId = e.target.value;
        const selectedDistrict = districts.find(district => district.Id === districtId);
        setWards(selectedDistrict ? selectedDistrict.Wards : []);
    };
    return ( 
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem link="/" label="Trang chủ" />
                            <BreadcrumbItem link="/cart" label="Thông tin đơn hàng" />
                        </Breadcrumb>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5 className="title-info-cart m-0">Thông tin đơn hàng</h5>
                            <div className="info-cart-wrap">
                                    {
                                        cartItems.length > 0 ?  (
                                            <>
                                                <div className="info-cart-block">
                                                {cartItems.map((item) => {
                                                    return (
                                                        <div className="info-cart d-flex">
                                                            <img src={`http://localhost:8080/${item.imagesProduct}`} alt="img-product-to-cart" className="img-product-to-cart" />
                                                            <div className="info-product-wrap d-flex align-items-center">
                                                                <div>
                                                                    <a href="#"><p className="name-product-to-cart">{item.nameProduct}</p></a>
                                                                    <p className="price-product-to-cart">{item.priceProduct.toLocaleString()} đ</p>
                                                                    <p className="old-price-product-to-cart"><del>{item.prmProduct.toLocaleString()} đ</del></p>
                                                                </div>
                                                            </div>
                                                            <div className="wrap-3 text-end">
                                                                <div onClick={()=>removeFromCartProduct(item)} className="delete-product-to-cart"><i class="fa fa-times icon-cancel"></i></div>
                                                                <input type="number" value={item.quantityPurchased} className="input-quantity-product-to-cart" name="" id="" />
                                                            </div>
                                                        </div>
                                                            )
                                                    })
                                                }
                                                </div>
                                                <div className="use-voucher-wrap">
                                                    <p className="title-use-voucher mx-3">Sử dụng voucher</p>
                                                    <form action="" className="use-voucher-form">
                                                        <div className="input-group">
                                                            <span className="delete-voucher"><i class="fa-solid fa-trash-can"></i></span>
                                                            <input type="text" name="" id="" className="form-control use-voucher-input" />
                                                            <span className="add-voucher"><i class="fa-solid fa-check"></i></span>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="into-money-wrap">
                                                    <div className="total-price-wrap d-flex justify-content-between">
                                                        <span className="total-price-title">Tổng cộng: </span>
                                                        <span className="total-price">{totalItems?.toLocaleString()} đ</span>
                                                    </div>
                                                    <div className="into-money-block d-flex justify-content-between">
                                                        <span className="into-money-title">Thành tiền: </span>
                                                        <span className="total-price">{totalItems?.toLocaleString()} đ</span>
                                                    </div>
                                                </div>
                                            </>
                                        ):(
                                            <div className="cart-empty-notify">Không có sản phẩm nào trong giỏ hàng!</div>
                                        )
                                    }
                            </div>
                        </div>
                        <div className="col-md-8">
                            <ul className="ul-navbar-tab d-flex">
                                <li className="nav-item"><h5 className="navbar-tab-title">ĐỊA CHỈ GIAO HÀNG</h5></li>
                                <li className="nav-item"><h5 className="navbar-tab-title">ĐĂNG NHẬP</h5></li>
                            </ul>
                            <div className="tab-content">
                                <form action="#" className="">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <input type="text" name="" id="" className="tab-input" placeholder="Họ và tên" />
                                        </div>
                                        <div className="col-md-4">
                                            <input type="text" name="" id="" className="tab-input" placeholder="Số điện thoại" />
                                        </div>
                                        <div className="col-md-4">
                                            <input type="text" name="" id="" className="tab-input" placeholder="Email" />
                                        </div>
                                        <div className="col-md-4">
                                            <select className="tab-select" id="city" aria-label=".form-select-sm" onChange={handleCityChange}>
                                                <option value="" selected>--Tỉnh thành--</option>
                                                {cities.map(city => (
                                                    <option key={city.Id} value={city.Id}>{city.Name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <select className="tab-select" id="district" aria-label=".form-select-sm" onChange={handleDistrictChange}>
                                                <option value="" selected>--Quận huyện--</option>
                                                {districts.map(district => (
                                                    <option key={district.Id} value={district.Id}>{district.Name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <select className="tab-select" id="ward" aria-label=".form-select-sm">
                                                <option value="" selected>--Phường xã--</option>
                                                {wards.map(ward => (
                                                    <option key={ward.Id} value={ward.Id}>{ward.Name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-md-12">
                                            <input type="text" name="" id="" className="tab-input" placeholder="Địa chỉ cụ thể" />
                                        </div>
                                        <div className="col-md-12">
                                            <textarea name="" className="tab-textarea" placeholder="Ghi chú"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="btn-submit-pay-wrap text-end my-4">
                            <button className="btn btn-success btn-submit-pay" type="submit">Tiếp tục thanh toán<i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Cart;