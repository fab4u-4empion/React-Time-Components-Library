export const use2Digit: (num: number) => string = (num) => {
    return num < 10 ? "0" + num : num.toString()
}