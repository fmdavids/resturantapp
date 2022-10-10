import {configureStore} from "@reduxjs/toolkit"
import reservationsReducer from "../features/reservationSlice"
import CustomersReducer from "../features/customerSlice"


export const store = configureStore({
    reducer: {
        reservations: reservationsReducer,
        customers: CustomersReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch