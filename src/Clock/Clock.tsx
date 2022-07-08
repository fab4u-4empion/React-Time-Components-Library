import React, { FC } from "react";
import './styles/index.scss'
import { ClockProps } from "./interfaces/clockPropsInterface";

export const Clock: FC<ClockProps> = ({size}) => {

    const clockContentClasses: string[] = ["clock-content"]
    clockContentClasses.push(size)

    return (
        <div className="clock-wrapper">
            <div className={clockContentClasses.join(" ")}>
                <div className="clock-date">
                    <div>
                        пятница
                    </div>
                    <div>
                        8 сентября 2022
                    </div>
                </div>
                <div className="clock-face">
                    21:05:06
                </div>
                <div className="clock-format">
                    PM
                </div>
            </div>
        </div>
    )
}