export const useLocaleDate: (date: Date) => string = (date: Date) => {
    const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декамбря']
    return date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear()
}