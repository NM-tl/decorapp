import React from "react";
import {AwardsHeader} from "./AwardsHeader/awardsheader";
import {AwardsItem} from "./AwardsItem/awardsitem";

export function Awards() {
    return(
        <div className="awards">
            <div className="awards-container">
                <AwardsHeader />
                <div className="awards-grid">
                    <AwardsItem />
                    <AwardsItem />
                    <AwardsItem />
                    <AwardsItem />
                    <AwardsItem />
                </div>
            </div>
        </div>
    );
}