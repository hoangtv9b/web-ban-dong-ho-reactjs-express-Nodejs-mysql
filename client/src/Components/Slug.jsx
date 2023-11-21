import React, { useEffect, useState } from "react";
import DetailProduct from "./DetailProduct";
import NotFound from "./NotFound";
import { useParams } from "react-router-dom";
import ContentPost from "./ContentPost";
const Slug = (props) => {
    const [imgProducts, setImgProducts] = useState([]);
    const { slug } = useParams();
    const { post } = props;
    const { product } = props;
    const { imagesProduct } = props;
    const matchedProduct = product.find((item) => item.slug === slug);
    const matchedPost = post.find((item)=> item.slug === slug);
    if(matchedProduct){
        return <DetailProduct product={matchedProduct} products={product} imagesProduct={imagesProduct} />;
    }
    if (matchedPost){
        return <ContentPost post={matchedPost} />
    }
    return <NotFound />;
}
export default Slug;