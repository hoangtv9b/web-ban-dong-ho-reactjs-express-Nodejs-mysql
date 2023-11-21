import React from "react";

const ProductShowVertical = (props) => {
    const { product } = props;
    const { category } = props;
    const { quantity } = props;
    let limit = quantity;
    if (limit === 0) {
    limit = product.length;
    }
    return ( 
        <>
            {product?.filter((product) => product.categoryProduct === category)
                .slice(0, limit)
                .map((product) => {
                    return(
                        <div className="d-flex my-4">
                            <a href={product.slug}><img className="img-product" src={`http://localhost:8080${product.imgProduct}`} alt="img-product" /></a>
                            <div className="info-product">
                                <a href={product.slug} className="link-name-product"><p className="name-product">{product.nameProduct}</p></a>
                                <span className="price">{product.priceProduct.toLocaleString()} ₫</span><span className="old-price"><del>{product.prmProduct.toLocaleString()} ₫</del></span>
                            </div>
                        </div>
                    )
                })
            }
        </>
     );
}
 
export default ProductShowVertical;