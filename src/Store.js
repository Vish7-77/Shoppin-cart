import {configureStore} from "@reduxjs/toolkit"
import { customReducer } from "./Reducer"

const store = configureStore({
    reducer:{
        cust: customReducer,
    }
})

export default store