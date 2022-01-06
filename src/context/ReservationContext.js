import { createContext, useState, useContext } from "react"
//import apiClient from "../auth/apiClient"
//import ValidaterErrors from "../components/ValidaterErrors"
import apiClient from "../helpers/apiClient"
import Reservation from "../pages/reservation/Reservation"
const reservationContext = createContext()

export function ProviderReservation({ children }) {
    const dataInit = () => {
        let startDate = new Date(new Date().toDateString())
        let endDate = new Date(new Date().toDateString())
        endDate.setDate(endDate.getDate() + 1) // addDays +1

        const data = {
            step: 1,
            errorsValidator: {},

            //step 1
            startDate: startDate,
            endDate: endDate,
            adults: 1,
            kids: 0,
            night: 0,
            discountCodeExmaple: [],

            //step 2
            rooms: [],
            roomQuantity: 0,
            roomSelected: {},

            //step 3
            complements: [],

            complementsIds: [],
            pricePorReservation: 0,
            subTotalPrice: 0,
            totalPrice: 0,
            complementsSelect: [],
            //step 4

            client: {
                name: "",
                phone: "",
                email: "",
                email_confirmation: "",
                country: "",
                city: "",
                check_in: "",
                special_request: "",
            },
            discount: null,
            order: "",
            createOrder: "",

            //helpers
        }
        return data
    }

    const [data, setData] = useState(dataInit())

    const updateData = (type, value) => {
        setData((prevData) => ({ ...prevData, [type]: value }))
    }

    const handleResetData = () => {
        setData(dataInit)
    }
    
    const step1Fetch = async ({ setErrors, setLoading }) => {
        setErrors([])
        setLoading(true)
        const response = await apiClient
            .post("/reservation/step_1_date", {
                start_date: data.startDate,
                end_date: data.endDate,
                adults: data.adults,
                kids: data.kids,
            })
            .then((response) => {
                setData({
                    ...data,
                    rooms: response.data.rooms,
                    // night: response.data.night,
                    // client: response.data.client,
                    step: 2,
                    // discountCodeExmaple: response.data.discount_code_exmaple,
                })
            })
            .catch((error) => {
                setErrors(formatErrors(error))
            })
            .then(() => setLoading(false))
        return response
    }
    const formatErrors = ({ error }) => {
        return error.response.status !== 422 ? ["algo salio mal"] : Object.values(error.response.data.errors).flat()
    }

    const apiStep1 = async () => {
        // const response = await fakeApi(() => {
        //     updateData("rooms", reservationJson.step1.rooms)
        //     updateData("night", reservationJson.step1.night)
        //     updateData("client", reservationJson.step1.client)
        //     updateData("step", 2)
        //     updateData("discountCodeExmaple", reservationJson.step1.discount_code_exmaple)
        // })
        // const response = await apiClient
        //     .post("/api/reservation/step_1_check_date", {
        //         start_date: data.startDate.toISOString().slice(0, 10), //format date 2020-12-12
        //         end_date: data.endDate.toISOString().slice(0, 10),
        //         adults: data.adults,
        //         kids: data.kids,
        //     })
        //     .then((response) => {
        //         updateData("rooms", response.data.rooms)
        //         updateData("night", response.data.night)
        //         updateData("client", response.data.client)
        //         updateData("step", 2)
        //         updateData("discountCodeExmaple", response.data.discount_code_exmaple)
        //     })
        //     .catch(function (error) {
        //         let errorsMsg = ValidaterErrors(error)
        //         console.log(errorsMsg)
        //         setErrors(errorsMsg)
        //     })
        // return response
    }
    const apiStep3 = async (discountInput = null) => {
        // const response = await fakeApi(() => {
        //     updateData("complementsSelect", reservationJson.step3.complements_cheked)
        //     updateData("pricePorReservation", reservationJson.step3.price_per_reservation)
        //     updateData("subTotalPrice", reservationJson.step3.sub_total_price)
        //     updateData("totalPrice", reservationJson.step3.total_price)

        //     if (reservationJson.step3.discount) {
        //         updateData("discount", reservationJson.step3.discount)
        //     }
        //     updateData("step", 4)
        // })

        // let dataRequest = {
        //     start_date: data.startDate.toISOString().slice(0, 10), //format date 2020-12-12
        //     end_date: data.endDate.toISOString().slice(0, 10),
        //     adults: data.adults,
        //     kids: data.kids,
        //     night: data.night,
        //     room_id: data.roomSelected.id,
        //     room_quantity: data.roomQuantity,
        //     ids_complements_cheked: data.complementsIds,
        // }
        // if (discountInput) {
        //     dataRequest["code"] = discountInput
        // }
        // const response = await apiClient
        //     .post("/api/reservation/step_3_confirmation", {
        //         ...dataRequest,
        //     })
        //     .then((response) => {
        //         updateData("complementsSelect", response.data.complements_cheked)
        //         updateData("pricePorReservation", response.data.price_per_reservation)
        //         updateData("subTotalPrice", response.data.sub_total_price)
        //         updateData("totalPrice", response.data.total_price)

        //         if (response.data.discount) {
        //             updateData("discount", response.data.discount)
        //         }
        //         updateData("step", 4)
        //     })
        //     .catch(function (errors) {
        //         updateData("totalPrice", data.subTotalPrice)
        //         updateData("discount", null)
        //         let msgErrors = ValidaterErrors(errors)
        //         setErrors(msgErrors)
        //     })

        //return response
    }

    const apiStep4 = async (paymentMethod) => {
        // const response = await fakeApi(() => {
        //     updateData("order", reservationJson.step4.order)
        //     updateData("create_date", reservationJson.step4.create_date)
        //     updateData("step", 5)
        // })
        // let dataRequest = {
        //     start_date: data.startDate.toISOString().slice(0, 10), //format date 2020-12-12
        //     end_date: data.endDate.toISOString().slice(0, 10),
        //     adults: data.adults,
        //     kids: data.kids,
        //     night: data.night,
        //     room_id: data.roomSelected.id,
        //     room_quantity: data.roomQuantity,
        //     ids_complements_cheked: data.complementsIds,
        //     methodpayment: paymentMethod.id,
        //     client: data.client,
        //     email_confirmation: data.client.email_confirmation,
        // }
        // if (data.discount) {
        //     dataRequest["code"] = data.discount.code
        // }
        // const response = await apiClient
        //     .post("/api/reservation/step_4_finalize", {
        //         ...dataRequest,
        //     })
        //     .then((response) => {
        //         updateData("order", response.data.order)
        //         updateData("create_date", response.data.create_date)
        //         updateData("step", 5)
        //     })
        //     .catch(function (errors) {
        //         let msgErrors = ValidaterErrors(errors)
        //         setErrors(msgErrors)
        //     })

        //return response
    }

    const context = {
        updateData,
        data,        
        handleResetData,
        apiStep1,
        step1Fetch,
        apiStep3,
        apiStep4,
    }

    return (
        <reservationContext.Provider value={context}>
            <Reservation />
        </reservationContext.Provider>
    )
}

export const useReservation = () => {
    return useContext(reservationContext)
}
