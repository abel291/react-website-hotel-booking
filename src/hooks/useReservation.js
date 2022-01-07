import { useEffect, useState } from "react"
//import useSWR from "swr"
import useSWRImmutable from "swr/immutable"
import apiClient from "../helpers/apiClient"

const useReservation = () => {
    const dataInit = () => {
        let startDate = new Date(new Date().toDateString())
        let endDate = new Date(new Date().toDateString())
        endDate.setDate(endDate.getDate() + 1) // addDays +1

        return {
            step: 1,

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
        //return data
    }

    const { data, mutate } = useSWRImmutable("reservations", dataInit)
    const updateData = (type, value) => {
        mutate((prevData) => ({ ...prevData, [type]: value }), false)
    }
    const resetData =()=>{
        mutate(dataInit,false)
    }

    const step1Fetch = async ({ setErrors, setLoading }) => {
        setErrors([])
        setLoading(true)
        await apiClient
            .get("/reservation/step_1_date", {
                params: {
                    start_date: data.startDate.toISOString().slice(0, 10),
                    end_date: data.endDate.toISOString().slice(0, 10),
                    adults: data.adults,
                    kids: data.kids,
                },
            })
            .then((response) => {
                setLoading(false)
                updateData("rooms", response.data.rooms)
                updateData("night", response.data.night)
                updateData("step", 2)
            })
            .catch((error) => {
                setLoading(false)
                setErrors(formatErrors(error))
            })
    }
    const step3Fetch = async ({ setErrors, setLoading, discountInput }) => {
        setErrors([])
        setLoading(true)

        await apiClient
            .get("/reservation/step_3_confirmation", {
                params: {
                    start_date: data.startDate.toISOString().slice(0, 10), //format date 2020-12-12
                    end_date: data.endDate.toISOString().slice(0, 10),
                    adults: data.adults,
                    kids: data.kids,
                    night: data.night,
                    room_id: data.roomSelected.id,
                    room_quantity: data.roomQuantity,
                    ids_complements_cheked: data.complementsIds,
                    code: discountInput || null,
                },
            })
            .then((response) => {
                setLoading(false)
                updateData("complementsSelect", response.data.complements_cheked)
                updateData("pricePorReservation", response.data.price_per_reservation)
                updateData("subTotalPrice", response.data.sub_total_price)
                updateData("totalPrice", response.data.total_price)
                if (response.data.discount) {
                    updateData("discount", response.data.discount)
                }
                updateData("client", response.data.client)
                updateData("discountCodeExmaple", response.data.discount_code_exmaple)
                updateData("step", 4)
            })
            .catch(function (error) {
                setLoading(false)
                updateData("totalPrice", data.subTotalPrice)
                updateData("discount", null)
                setErrors(formatErrors(error))
            })
    }
    const step4Fetch = async ({ setErrors, setLoading,paymentMethod }) => {
        setErrors([])
        setLoading(true)
        
        let dataRequest = {
            start_date: data.startDate.toISOString().slice(0, 10), //format date 2020-12-12
            end_date: data.endDate.toISOString().slice(0, 10),
            adults: data.adults,
            kids: data.kids,
            night: data.night,
            room_id: data.roomSelected.id,
            room_quantity: data.roomQuantity,
            ids_complements_cheked: data.complementsIds,
            methodpayment: paymentMethod.id,
            client: data.client,
            email_confirmation: data.client.email_confirmation,
        }
        if (data.discount) {
            dataRequest["code"] = data.discount.code
        }
        await apiClient
            .post("/reservation/step_4_finalize", {
                ...dataRequest,
            })
            .then((response) => {
                updateData("order", response.data.order)
                updateData("create_date", response.data.create_date)
                updateData("step", 5)
            })
            .catch(function (error) {
                setErrors(formatErrors(error))
                setLoading(false)
            })
        
    }

    const formatErrors = (error) => {
        return error.response.status !== 422 ? ["algo salio mal"] : Object.values(error.response.data.errors).flat()
    }

    return { data, updateData, step1Fetch, step3Fetch, step4Fetch,resetData }
}

export default useReservation
