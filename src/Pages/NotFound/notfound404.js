import React from "react";

export function Notfound404() {
    return (
        <div className="wrapper">
            <div className="error-page__container">
                <h1 className="error-title">404</h1>
                <h1 className="error-text">Sorry Page Not Found...</h1>
                <button className="error-btn__home">Go HomePage</button>
            </div>
        </div>
    );
}