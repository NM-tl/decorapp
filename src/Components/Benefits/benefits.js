import React from "react";
import {BenefitsHeader} from "./benefitsHeader/benefitsHeader";
import {BenefitsItem} from "./BenefitsItem/benefitsItem";

export function Benefits() {
    return(
        <div className="benefits">
            <div className="wrapper">
                <BenefitsHeader />
                <div className="benefits-grid">
                    <BenefitsItem />
                    <BenefitsItem />
                    <BenefitsItem />
                </div>
            </div>
        </div>
    );
}