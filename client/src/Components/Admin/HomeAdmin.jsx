import React from "react";
const HomeAdmin = () => {
    const num = 60;
    return(
        <>
            <div className="content-admin-nav col-md-12 d-block p-3">
                <div className="app-title d-flex col-md-10 justify-content-between p-2">
                    <span>Bảng điều khiển</span>
                    <span id="time" />
                </div>
                <div className="table-product col-md-10 my-3 p-5">
                    <div className="row">
                        <div className="col-md-3">
                        <div className="smail-box order-box p-3">
                            <div className="inner-box">
                            <h3 className="quantity-inner-box m-0">150</h3>
                            <p className="title-inner-box m-0">Đơn hàng mới</p>
                            </div>
                            <a href="#" className="add-info">Thêm thông tin<i className="fa-solid fa-right-long" /></a>
                            <i className="fa-solid fa-bag-shopping" />
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div className="smail-box bounce-rate p-3">
                            <div className="inner-box">
                            <h3 className="quantity-inner-box m-0">53%</h3>
                            <p className="title-inner-box m-0">Tỷ lệ thoát</p>
                            </div>
                            <a href="#" className="add-info">Thêm thông tin<i className="fa-solid fa-right-long" /></a>
                            <i className="fa-solid fa-chart-simple" />
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div className="smail-box user-sign-up p-3">
                            <div className="inner-box">
                            <h3 className="quantity-inner-box m-0">44</h3>
                            <p className="title-inner-box m-0">Đăng ký người dùng</p>
                            </div>
                            <a href="#" className="add-info">Thêm thông tin<i className="fa-solid fa-right-long" /></a>
                            <i className="fa-solid fa-user-plus" />
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div className="smail-box visitor p-3">
                            <div className="inner-box">
                            <h3 className="quantity-inner-box m-0">65</h3>
                            <p className="title-inner-box m-0">Khách truy cập</p>
                            </div>
                            <a href="#" className="add-info">Thêm thông tin<i className="fa-solid fa-right-long" /></a>
                            <i className="fa-solid fa-universal-access" />
                        </div>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-md-7">
                        <canvas id="myChart" />
                        </div>
                        <div className="col-md-5">
                        <div className="complete">
                            <label className="my-3" htmlFor>Tiến trình hoạt động</label>
                            <div className="text-complete d-flex justify-content-between my-2">
                            <span>Số lượng đơn hàng đang chờ xử lý</span><span>60/100</span>
                            </div>
                            <div className="progress">
                            <div className="progress-bar" style={{width: `${num}%`}} />
                            </div>
                            <div className="text-complete d-flex justify-content-between my-2">
                            <span>Số lượng đơn hàng đã hoàn thành</span><span>140/200</span>
                            </div>
                            <div className="progress">
                            <div className="progress-bar" style={{width: '70%'}} />
                            </div>
                            <div className="text-complete d-flex justify-content-between my-2">
                            <span>Số lượng sản phẩm đang chờ nhập về kho</span><span>60/200</span>
                            </div>
                            <div className="progress">
                            <div className="progress-bar" style={{width: '40%'}} />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default HomeAdmin;