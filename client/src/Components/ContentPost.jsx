import { Breadcrumb, BreadcrumbItem } from "./Breadcumb";

const ContentPost = (props) => {
    const { post } = props;
    return ( 
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem link="/" label="Trang chủ" />
                            <BreadcrumbItem link="/tin-tuc" label="Tin giải trí" />
                            <BreadcrumbItem link={post.slug} label={post.titlePost} />
                        </Breadcrumb>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="category-product-wrap mb-5">
                                <h5 className="title-category-product">
                                    DANH MỤC TIN TỨC
                                </h5>
                                <ul className="sub-menu-category-product">
                                    <li className="category-product-nav-item"><a href="#">Tin giải trí</a></li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="content-post-wrap">
                                <img src="../images/1542333244-1958354366-smartwatch-ang-bung-phat-nh-ng-ng-h-c-v-n-ldquo-s-ng-kh-e-rdquo.jpg" alt="img-post" className="img-post" />
                                <div className="info-post-content">
                                    <h4 className="title-post-content">{post.titlePost}</h4>
                                    <div className="date-time-post">
                                        <span className="date-time-post-content"><i class="fa-regular fa-clock"></i>{post.createdAt}</span>
                                    </div>
                                </div>
                                <div className="content-post my-3">
                                    <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ContentPost;