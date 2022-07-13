import React from "react";
import {PageIntro} from "../../Components/PageIntro/pageintro";
import {TeamSection} from "../../Components/Team/teamsection";
import {Awards} from "../../Components/Awards/awards";
import {Conclusion} from "../../Components/Conclusion/conclusion";

export function About() {
    return(
        <div className="page-header">
            <PageIntro />
            <TeamSection />
            <Awards />
            <Conclusion />
        </div>
    );
}