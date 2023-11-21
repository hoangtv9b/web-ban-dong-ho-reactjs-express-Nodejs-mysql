import { useState, useEffect } from "react";
import "./Components/css/style.css";
import "./Components/css/admin.css";
import axios from "axios";
import React from 'react';
import HomePage from "./Components/HomePage";
import LoginAdmin from "./Components/Admin/LoginAdmin";
import Layout from "./Components/Layout/Layout";
import LayoutAdmin from "./Components/Admin/LayoutAdmin";
import HomeAdmin from "./Components/Admin/HomeAdmin";
import Product from "./Components/Admin/Product";
import AddProduct from "./Components/Admin/AddProduct";
import { BrowserRouter, Routes, Router, Route, Navigate } from "react-router-dom";
import MensWatch from "./Components/MensWatch";
import WomensMatch from "./Components/WomensMatch";
import TradeMark from "./Components/TradeMark";
import DoubleWtach from "./Components/DoubleWatch";
import Accessory from "./Components/Accessory";
import Contact from "./Components/Contact";
import { ProductContext } from "./Components/ProductContext";
import EditProduct from "./Components/Admin/EditProduct";
import Slug from "./Components/Slug";
import Post from "./Components/Post";
import AddPost from "./Components/Admin/AddPost";
import PostAdmin from "./Components/Admin/PostAdmin";
import ContentPost from "./Components/ContentPost";
import SearchResult from "./Components/SearchResult";
import { store } from "./js/store/store";
import { Provider } from "react-redux";
import EditPost from "./Components/Admin/EditPost";
import Cart from "./Components/Cart";
import TinhThanh from "./Components/TinhThanh";
function App() {
  const [allProduct, setAllProduct] = useState([]);
  const [allPost, setAllPost] = useState([]);
  const [imagesProduct, setImagesProduct] = useState([]);
  const [myCart, addToCart] = useState([{}]);
  const [total, setToTal] = useState(0);
  const [selectSearch, setSelectSearch] = useState("Sản phẩm");
  const [selectSearch2, setSelectSearch2] = useState("Sản phẩm");
  const [searchKeyWord, setSearchKeyWord] = useState({
    search: "",
    selectSearch: ""
  });
  const [searchData, setSearchData] = useState([]);
  const [productExists, setProductExists] = useState(false);
  // product
  useEffect(() => {
    async function getData () {
      const res = await axios.get("/api/product")
      return res;
    }
    getData().then((res) => setAllProduct(res.data))
    getData().catch((error) => {console.error("lỗi lấy dữ liệu: " + error)})
  }, [])
  useEffect(() => {
    async function getData () {
      const res = await axios.get("/api/images-product")
      return res;
    }
    getData().then((res) => {setImagesProduct(res.data)})
  }, [])
  useEffect(()=>{
    async function getData() {
        const res = await axios.get("/api/posts");
        return res;
    }
    getData().then((res)=>{setAllPost(res.data)})
    getData().catch((error)=>{console.log("error: "+error)})
  }, [])
  return (
    <ProductContext.Provider value={{ total, setToTal, myCart, addToCart, productExists, setProductExists, searchKeyWord, setSearchKeyWord
, selectSearch, setSelectSearch, searchData, setSearchData, selectSearch2, setSelectSearch2 }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage product={allProduct} post={allPost} />} />
              <Route path="/dong-ho-nam" element={<MensWatch product={allProduct} />} />
              <Route path="/dong-ho-nu" element={<WomensMatch product={allProduct} />} />
              <Route path="/thuong-hieu" element={<TradeMark product={allProduct} />} />
              <Route path="/dong-ho-doi" element={<DoubleWtach product={allProduct} />} />
              <Route path="/phu-kien" element={<Accessory product={allProduct} />} />
              <Route path="/lien-he" element={<Contact />} />
              <Route path="/tin-tuc" element={<Post allPost={allPost} />} />
              <Route path="/search" element={<SearchResult />} />
              <Route path="/gio-hang" element={<Cart />} />
              <Route path="/tinhthanh" element={<TinhThanh />} />
              <Route path="/:slug" element={<Slug product={allProduct} post={allPost} imagesProduct={imagesProduct} />} />
              <Route path="content-post" element={<ContentPost />} />
            </Route>
            <Route path="/admin" element={<LoginAdmin />} />
            <Route path="/dashboard-admin/" element={<LayoutAdmin />}>
              <Route index element={<HomeAdmin />} />
              <Route path="product" element={<Product product={allProduct} />} />
              <Route path="add-product" element={<AddProduct />} />
              <Route path="edit-product/:id" element={<EditProduct product={allProduct} imagesProduct={imagesProduct} />} />
              <Route path="article-management" element={<PostAdmin allPost={allPost} />} />
              <Route path="edit-article/:id" element={<EditPost post={allPost} />} />
              <Route path="add-post" element={<AddPost />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ProductContext.Provider>
  );
}
export default App;
