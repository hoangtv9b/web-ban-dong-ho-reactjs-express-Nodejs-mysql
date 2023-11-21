import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const LoginAdmin = () => {
    const [loginError, setLoginError] = useState(false)
    const [formData, setFormData] = useState({
        'email': '',
        'password': '',
        'checked': false
    });
    const handleEmailChange = (event) => {
        setFormData( prevState => ({
            ...prevState,
            email: event.target.value
        }))
    }
    const handlePasswordChange = (event) => {
        setFormData( prevState => ({
            ...prevState,
            password: event.target.value
        }))
    };
    const handleAutoLoginChange = (event) => {
        setFormData( prevState => ({
            ...prevState,
            checked: event.target.checked
        }))
    }
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.post("/api/login-admin", formData);
            if(response.data == ""){
                setLoginError(true);
            }else{
                const token = response.data.token;
                const avtAdmin = response.data.avtAdmin;
                const nameAdmin = response.data.nameAdmin;
                localStorage.setItem("token", token);
                localStorage.setItem("avtAdmin", avtAdmin);
                localStorage.setItem("nameAdmin", nameAdmin);
                navigate("/dashboard-admin/");
            }
        }catch(error){
            console.log(error)
        }
    }
    return (
        <>
           <div className="admin-UI container-fluid d-flex justify-content-center align-items-center p-0">
                <div className="col-md-3 d-flex flex-column">
                    <div className="logo-shop-nav d-flex justify-content-center">
                        <a href="/"><img src="/images/i-n-may-logo-black-318-163-0.png" alt="logo-shop" className="logo-shop" /></a>
                    </div>
                    <form method="post" onSubmit={handleSubmit} className="form-login-admin">
                        <div className="form-group">
                            <label htmlFor="email">Tên người dùng hoặc Địa chỉ Email</label>
                            <input type="text" className="form-control" placeholder="Tên hoặc địa chỉ email" value={formData.email} onChange={handleEmailChange} id="email-admin" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Mật khẩu</label>
                            <input type="password" className="form-control" placeholder="Mật khẩu" value={formData.password} onChange={handlePasswordChange} id="password-admin" required />
                        </div>
                        <div className="form-group form-check">
                            <label className="form-check-label">
                            <input className="form-check-input" checked={formData.checked} onChange={handleAutoLoginChange} type="checkbox" />Tự động đăng nhập
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Đăng nhập</button>
                        <div id="error" className="mt-3">{loginError && <p>Sai thông tin đăng nhập!</p>}</div>
                    </form>
                    <div className="support-pasword  ml-3 mt-2 d-flex flex-column">
                    <a href="/admin/verification-email/" className="support-pasword-link mb-1">Bạn quên mật khẩu?</a>
                    <a href="/" className="support-pasword-link">Quay lại XSHOP</a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default LoginAdmin;