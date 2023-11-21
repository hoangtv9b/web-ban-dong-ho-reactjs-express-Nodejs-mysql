import React from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./Header";
const LayoutAdmin = () => {
    const isAdmin = localStorage.getItem("token");
    return(
        <>
            <Header />
            {isAdmin ? <Outlet /> : <Navigate to="/admin/" />}
        </>
    )
}
export default LayoutAdmin
