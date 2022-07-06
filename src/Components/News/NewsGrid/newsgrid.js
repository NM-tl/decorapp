import React from "react";
import {NewsBlockContainer} from "../NewsBlockContainer/newsblockcontainer";
import {NewsNav} from "./NewsNav/newsnav";

export function NewsGrid() {
    return (<>
        <div className="news-grid">
            <NewsBlockContainer />
            <NewsBlockContainer />
            <NewsBlockContainer />
        </div>
        <NewsNav />
        </>
    );
}