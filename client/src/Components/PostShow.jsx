import React from "react";

const PostShow = (props) => {
    const { allPost, category, quantity, category2 } = props;
    let limit = quantity;
    if (limit === 0) {
        limit = allPost.length;
    }
    return ( 
        <>
            {
            allPost?.filter((allPost) => allPost.category === category || allPost.category === category2)
                .slice(0, limit)
                .map((allPost) => {
                    return (
                        <div className="col-md-3 col-6 my-3">
                            <div className="">
                                <div className="card-body">
                                    <a href={allPost.slug}><img className="img-post-show" src={`http://localhost:8080${allPost.imagePost}`} alt="" /></a>
                                    <div className="card-title">
                                        <p className="date-time-post-show"><i class="fa-regular fa-clock"></i>{allPost.createdAt}</p>
                                        <div className="name-post-show-wrap">
                                            <a href={allPost.slug} className="link-name-post-show">{allPost.titlePost}</a>
                                        </div>
                                    </div>
                                    <div className="card-text">
                                        <div className="content-post-show" dangerouslySetInnerHTML={{ __html: allPost.content }}></div>
                                    </div>
                                </div>
                                <div className="card-footer text-end">
                                    <a href={allPost.slug} className="see-more-post-link">xem thêm<i class="fa-solid fa-angles-right"></i></a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
     );
}
 
export default PostShow;