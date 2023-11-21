import React from "react";
const PostShowVertical = (props) => {
    const {post} = props;
    const {quantity} = props;
    let limit = quantity;
    if(quantity == 0){
        limit = post.length;
    }
    return ( 
        <>
            {post
                .slice(0, quantity)
                .map((post)=>{
                    return (<div className="post-wrap d-flex py-3 my-2">
                    <a className="link-img-post-preview" href={post.slug}><img className="img-post-preview" src={`http://localhost:8080${post.imagePost}`} alt="img-post" /></a>
                    <div className="info-post-preview">
                        <div className="date-post-preview mb-2">
                            <span><i class="fa-regular fa-clock"></i>13:50 - 07/06/2018</span>
                        </div>
                        <a href="#" className="link-title-post-preview"><h5 className="title-post-preview">{post.titlePost}</h5></a>
                        <p className="content-post-preview">❖ Timothy Barber, biên tập viên của tạp chí đồng hồ hạng sang QP nói rằng văn hóa đồng hồ là văn hóa nam...</p>
                        {/* <p className="content-post-preview" dangerouslySetInnerHTML={{ __html: post.content }}></p> */}
                        <div className="see-more-post text-end px-4">
                            <a href={post.slug} className="see-more-post-link">xem thêm<i class="fa-solid fa-angles-right"></i></a>
                        </div>    
                    </div>
                </div>)
                })

            }
            
        </>
     );
}
 
export default PostShowVertical;