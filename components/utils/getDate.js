export const getCurrentDateFormatMonDateYear = ()=>{
    const date = new Date()

    const getYear = date.getFullYear()

    const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format;
    const getMonth = monthName(date);

    const getDate = date.getDate()


    return `${getMonth} ${getDate}, ${getYear}`
}