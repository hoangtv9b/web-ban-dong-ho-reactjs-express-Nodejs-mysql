import React from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("nameAdmin");
        localStorage.removeItem("avtAdmin");
        navigate("/admin/");
    };
    return(
        <>
            <div className="navbar-admin-wrap">
                <div className="navbar-admin">
                    <div className="account-admin p-4 m-0">
                    <img src={`http://localhost:8080${localStorage.getItem("avtAdmin")}`} alt="avatar-admin" className="avatar-admin" />
                    <div className="info-admin d-flex flex-column">
                        <span className="name-admin mt-1">
                            {localStorage.getItem("nameAdmin")}
                        </span>
                        <a onClick={handleLogout} className="log-out">Đăng xuất</a>
                    </div>
                    </div>
                    <ul className="nav-menu-admin m-0">
                        <li><a href="/dashboard-admin/POS"><i className="app-menu-icon fa-solid fa-cart-shopping" /><span>POS bán hàng</span></a></li>
                        <li><a href="/dashboard-admin/"><i className="app-menu-icon fa-solid fa-chart-line" /><span>Bảng điều khiển</span></a></li>
                        <li><a href="/dashboard-admin/employee-manager"><i className="app-menu-icon fa-solid fa-clipboard-user" /><span>Quản lý nhân viên</span></a></li>
                        <li><a href="/dashboard-admin/customer-management"><i className="app-menu-icon fa-solid fa-person" /><span>Quản lý khách hàng</span></a></li>
                        <li><a href="/dashboard-admin/product"><i className="app-menu-icon fa-brands fa-product-hunt" /><span>Quản lý sản phẩm</span></a></li>
                        <li><a href="/dashboard-admin/order-management"><i className="app-menu-icon fa-solid fa-file-signature" /><span>Quản lý đơn hàng</span></a></li>
                        <li><a href="/dashboard-admin/article-management"><i className="app-menu-icon fa-solid fa-person-walking" /><span>Quản lý bài viết</span></a></li>
                        <li><a href="#"><i className="app-menu-icon fa-solid fa-magnifying-glass-dollar" /><span>Bảng kê lương</span></a></li>
                        <li><a href="#"><i className="app-menu-icon fa-solid fa-money-check-dollar" /><span>Báo cáo doanh thu</span></a></li>
                        <li><a href="#"><i className="app-menu-icon fa-solid fa-file-circle-check" /><span>Lịch công tác</span></a></li>
                        <li><a href="/dashboard-admin/system-installation"><i className="app-menu-icon fa-solid fa-gear" /><span>Cài đặt hệ thống</span></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header;