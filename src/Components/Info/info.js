import React from "react";
import { Social } from "./Social/social";
import {GoogleMark} from "./GoogleMark/googlemark";
import {YearTimer} from "./YearTimer/yeartimer";

export function Info() {
    return(
        <div className="intro-info__grid">
            <Social />
            <GoogleMark />
            <YearTimer />
        </div>
    )
}