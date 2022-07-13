import React from "react";
import {SectionHeader} from "../SectionHeader/sectionheader";
import {UnitData} from "./UnitData/unitdata";

export function TeamSection() {
    return(
        <div className="team">
            <SectionHeader />
            <div className="team-grid">
                <UnitData />
                <UnitData />
            </div>
        </div>
    );
}