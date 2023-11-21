import React from "react";
import { Breadcrumb, BreadcrumbItem } from "./Breadcumb";

 const Contact = () => {
    return ( 
        <>
            <div className="container-fuid my-2">
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem link="/" label="Trang chủ" />
                            <BreadcrumbItem link="/lien-he" label="liên hệ" />
                        </Breadcrumb>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-12">
                            <h5 className="form-contact-title">
                                NHAN HOA SOFTWARE COMPANY
                            </h5>
                            <form className="" method="post">
                                <div className="form-group">
                                    <input type="text" name="" className="input-contact" placeholder="Họ và tên" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="" className="input-contact" placeholder="Số điện thoại" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="" className="input-contact" placeholder="Tiêu đề" required />
                                </div>
                                <div className="form-group">
                                    <textarea rows="3" className="textarea-contact" placeholder="Ghi chú" required></textarea>
                                </div>
                                <input type="submit" value="GỬI YÊU CẦU" className="submit-form-contact" />
                            </form>
                        </div>
                        <div className="col-md-3 col-12">
                            <h5 className="title-contact pt-3">VỀ CHÚNG TÔI</h5>
                            <div className="contact-info-wrap my-3">
                                <label className="contact-info contact-info-text my-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima commodi beatae tenetur eos vitae praesentium maiores corporis sunt tempora.</label>
                                <p className="contact-info contact-info-address"><i class="fa-solid fa-location-dot mr-2"></i>32 Võ Văn Dũng, Đống Đa, Hà Nội</p>
                                <p className="contact-info contact-info-number-phone"><i class="fa-solid fa-phone mr-2"></i> (04) 7308 6680</p>
                                <p className="contact-info contact-info-email"><i class="fa-solid fa-envelope mr-2"></i>web.nhanhoa@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fuild mt-2 mb-5">
                <div className="container">
                    <div className="row">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.4218671197714!2d105.82145977421285!3d21.01579958063023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab7952f855d3%3A0x368ab606a7edf91a!2zUC4gVsO1IFbEg24gRMWpbmcsIMOUIENo4bujIEThu6thLCDEkOG7kW5nIMSQYSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1695994076249!5m2!1svi!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                    </div>
                </div>
            </div>
        </>
     );
 }
  
 export default Contact;