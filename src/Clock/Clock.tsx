import React, { FC } from "react";
import './styles/index.css'
import { ClockProps } from "./interfaces/clockPropsInterface";

export const Clock: FC<ClockProps> = ({size}) => {
    const clockClasses: string[] = ['clock']
    clockClasses.push(size)

    return (
        <div className={clockClasses.join(" ")}>

        </div>
    )
}