import React, { FC, useEffect, useState } from "react";
import './styles/index.scss'
import { ClockProps } from "./types/clockPropsInterface";
import { use2Digit } from "./hooks/2Digit";
import { useWeekDay } from "./hooks/WeekDay";
import { useLocaleDate } from "./hooks/LocaleDate";

export const Clock: FC<ClockProps> = ({
                                        size = "regular", 
                                        locale = "ru",
                                        className = ""
                                    }) => {

    const [currentDate, setCurrentDate] = useState<Date>(new Date(Date.now()))

    const interval: any = () => {
        setCurrentDate(new Date(Date.now()))
    }

    useEffect(() => {
        setInterval(interval, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    const hours: string = use2Digit(currentDate.getHours())
    const minutes: string = use2Digit(currentDate.getMinutes())
    const seconds: string = use2Digit(currentDate.getSeconds())

    const dayOfWeek: string = useWeekDay(currentDate.getDay(), locale)

    const localeDate: string = useLocaleDate(currentDate, locale)

    const clockContentClasses: string[] = ["clock-content"]
    clockContentClasses.push(size)

    const clockWrapperClasses: string[] = ["clock-wrapper"]
    clockWrapperClasses.push(className)

    return (
        <div className={clockWrapperClasses.join(" ")}>
            <div className={clockContentClasses.join(" ")}>
                <div className="clock-date">
                    <div>
                        {dayOfWeek}
                    </div>
                    <div>
                        {localeDate}
                    </div>
                </div>
                <div className="clock-face">
                    {hours}:{minutes}:{seconds}
                </div>
                <div className="clock-format">
                    
                </div>
            </div>
        </div>
    )
}