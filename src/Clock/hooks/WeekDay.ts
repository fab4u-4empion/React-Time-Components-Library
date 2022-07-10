import { TLocale } from "../types/types" 

export const useWeekDay: (num: number, locale: TLocale) => string = (num: number, locale: TLocale) => {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

    switch (locale) {
        case "ru":
            days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
            break

        case "en":
            days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    }

    return days[num]
}