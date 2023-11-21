import React from "react";

const Footer = () => {
    return (
        <>
            <div>
                <div className="container-fluid footer-container">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-12">
                        <h5 className="title-footer">VỀ CHÚNG TÔI</h5>
                        <span className="info-footer-text mt-4 mb-1">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae doloribus sunt a explicabo consequatur, reprehenderit repellat iure veniam! Omnis aliquam itaque
                        </span>
                        <p className="contact-text"><i className="fa-solid fa-location-dot" />32 Võ Văn Dũng, Đống Đa, Hà Nội</p>
                        <p className="contact-text"><i className="fa-solid fa-phone" />(04) 7308 6680</p>
                        <p className="contact-text"><i className="fa-solid fa-envelope" />web.nhanhoa@gmail.com</p>
                        </div>
                        <div className="col-md-3 col-12">
                        <h5 className="title-footer">TIN TỨC MỚI</h5>
                        <div className="link-contact-wrap my-4">
                            <p><a href="#" className="link-footer">Về Chúng Tôi</a></p>
                            <p><a href="#" className="link-footer">Tuyển Dụng</a></p>
                            <p><a href="#" className="link-footer">Hợp Tác Bán Hàng</a></p>
                            <p><a href="#" className="link-footer">Điều Kiện &amp; Điều Khoản</a></p>
                            <p><a href="#" className="link-footer">Quy Chế Quản Lý</a></p>
                            <p><a href="#" className="link-footer">Chính Sách Bảo Mật</a></p>
                        </div>
                        </div>
                        <div className="col-md-3 col-12">
                        <h5 className="title-footer">CÂU HỎI THƯỜNG GẶP</h5>
                        <div className="link-contact-wrap my-4">
                            <p><a href="#" className="link-footer">Hỏi Đáp</a></p>
                            <p><a href="#" className="link-footer">Liên Hệ</a></p>
                            <p><a href="#" className="link-footer">Biểu Phí Giao Hàng</a></p>
                            <p><a href="#" className="link-footer">Thẻ quà tặng</a></p>
                            <p><a href="#" className="link-footer">Danh Mục Sản Phẩm</a></p>
                            <p><a href="#" className="link-footer">Kiểm Tra Đơn Hàng</a></p>
                        </div>
                        </div>
                        <div className="col-md-3 col-12">
                        <h5 className="title-footer">CHÍNH SÁCH</h5>
                        <div className="link-contact-wrap my-4">
                            <p><a href="#" className="link-footer">Chính sách bảo mật</a></p>
                            <p><a href="#" className="link-footer">Chính sách vận chuyển</a></p>
                            <p><a href="#" className="link-footer">Chính sách bảo hành</a></p>
                            <p><a href="#" className="link-footer">Chính sách đổi hàng</a></p>
                            <p><a href="#" className="link-footer">Quy định</a></p>
                            <p><a href="#" className="link-footer">Quy định thanh toán</a></p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container-fluid detail-source-website d-flex justify-content-center align-items-center">
                    <span className="detail-source-website-text py-3">Copyright by Web4s.com</span>
                </div>
            </div>
        </>
    );
}
export default Footer;