import React from "react";

const NotFound = () => {
    return ( 
        <>
            <div className="not-found-wrap text-center">
                <div className="not-found-block">
                    <img class="img-not-found" src="./images/404Not-found.jpg" alt="" />
                    <br />
                    <a href="/" className="btn btn-primary">Go to homepage</a>
                </div>
            </div>
        </>
     );
}
 
export default NotFound;