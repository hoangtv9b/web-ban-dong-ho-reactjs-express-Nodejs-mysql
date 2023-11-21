
const PostSearch = (props) => {
    const { post } = props;
    return ( 
        <>
            {post.map((post)=>{
                return (
                    <div className="col-md-3 col-6 my-3">
                        <div className="">
                            <div className="card-body">
                                <a href={post.slug}><img className="img-post-show" src={`http://localhost:8080${post.imagePost}`} alt="" /></a>
                                <div className="card-title">
                                    <p className="date-time-post-show"><i class="fa-regular fa-clock"></i>{post.createdAt}</p>
                                    <div className="name-post-show-wrap">
                                        <a href={post.slug} className="link-name-post-show">{post.titlePost}</a>
                                    </div>
                                </div>
                                <div className="card-text">
                                    <div className="content-post-show" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                                </div>
                            </div>
                            <div className="card-footer text-end">
                                <a href={post.slug} className="see-more-post-link">xem thêm<i class="fa-solid fa-angles-right"></i></a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
     );
}
 
export default PostSearch;