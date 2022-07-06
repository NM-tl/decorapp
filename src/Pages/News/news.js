import React from "react";
import {Ticker} from "../../Components/Ticker/ticker";
import {NewsGrid} from "../../Components/News/NewsGrid/newsgrid";

export function News() {
    return(
        <div className="wrapper">
            <div className="page-intro">
                <div className="intro-text">
                    <h1>Latest</h1>
                    <h3>about us</h3>
                </div>
            </div>
            <Ticker />
            <div className="news-container">
                <NewsGrid />
            </div>
        </div>
    )
}