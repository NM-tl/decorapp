import React from "react";
import { Info } from "../../Components/Info/info";
import { Benefits } from "../../Components/Benefits/benefits";
import {Carousel} from "../../Components/Carousel/carousel";

export function Home() {
    return (
        <>
            <div className="intro">
                    <div className="intro-flex">
                        <div className="intro-text__hero">
                            <h1>Decor</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut
                                labore et dolore magna aliqua. Amet consectetur adipiscing elit ut aliquam purus
                                sit.</p>
                        </div>
                    </div>
                <div className="intro-wrapper">
                <Info/>
                </div>
            </div>
            <Benefits/>
            <Carousel/>
        </>
);
}