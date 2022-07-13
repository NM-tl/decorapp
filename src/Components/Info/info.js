import React from "react";
import { Social } from "./Social/social";
import {YearTimer} from "./YearTimer/yeartimer";
import {ScrollDown} from "../Buttons/ScrollDown/scrolldown";

export function Info() {
    return(
        <div className="intro-info__grid">
            <Social />
            <ScrollDown />
            <YearTimer />
        </div>
    )
}