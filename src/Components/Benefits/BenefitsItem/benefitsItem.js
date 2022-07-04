import React from "react";
import {BenefitsItemTitle} from "./benefitsItemTitle";
import {BenefitsItemText} from "./benefitsItemText";

export function BenefitsItem() {
    return (
        <div className="benefits-item">
            <BenefitsItemTitle />
            <BenefitsItemText />
        </div>
    );
}