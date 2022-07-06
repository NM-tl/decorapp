import React from "react";
import {ScrollDown} from "../../Components/Buttons/ScrollDown/scrolldown";
import { Info } from "../../Components/Info/info";
import { Benefits } from "../../Components/Benefits/benefits";
import {Carousel} from "../../Components/Carousel/carousel";
import {Footer} from "../../Components/Footer/footer";

export function Home() {
    return (
        <>
            <div className="intro">
                <div className="intro-wrapper">
                    <div className="intro-grid">
                        {/*<div className="intro-text__wrapper">*/}
                            <div className="intro-text__hero">
                                <h1>D</h1>
                                <h1>ecor</h1>
                            </div>
                            <div className="intro-text__after">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut
                                    labore et dolore magna aliqua. Amet consectetur adipiscing elit ut aliquam purus
                                    sit.</p>
                                <ScrollDown />
                            </div>
                        {/*</div>*/}
                    </div>
                    <Info/>
                </div>
            </div>
            <Benefits/>
            <Carousel/>
        </>
);
}