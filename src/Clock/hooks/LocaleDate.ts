import { TLocale } from "../types/types" 

export const useLocaleDate: (date: Date, locale: TLocale) => string = (date: Date, locale: TLocale) => {
    let month: string[]
    switch (locale) {
        case "ru":
            month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
            return date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear()

        case "en":
            month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            return month[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
    }
}