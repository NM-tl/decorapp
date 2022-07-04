import React from "react";
import { Info } from "../../Components/Info/info";
import { Benefits } from "../../Components/Benefits/benefits";

export function Home() {
    return (
        <>
            <div className="intro">
                <div className="intro-wrapper">
                    <div className="intro-grid">
                        <div className="intro-text__wrapper">
                            <h1>Decor</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Amet consectetur adipiscing elit ut aliquam purus sit.</p>
                            <a href="#benefits" className="intro-scroll">Scroll to discover &darr;</a>
                        </div>
                    </div>
                    <Info/>
                </div>
            </div>
           <Benefits />
        </>
);
}