export const formatCurrency = (n) => {
    const currencyFormat = Intl.NumberFormat("de-DE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
    n = n ? n : 0 // number NaN = 0
    return "$ " + currencyFormat.format(parseFloat(n))
}
export const formatErrors = (error) => {
    console.log(error.response)
    if (error.response.status === 422) {
        return error.response.data.errors ? Object.values(error.response.data.errors).flat() : error.response.data.message
    } else {
        return ["Algo salio mal"]
    }
    //return error.response.status !== 422 ? ["algo salio mal"] : Object.values(error.response.data.errors).flat()
}
