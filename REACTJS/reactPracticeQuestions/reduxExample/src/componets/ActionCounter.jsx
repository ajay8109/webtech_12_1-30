import { INCREMENT, DECTREMENT, RESET } from "./CounterType";

export const increment = () => {
    return {
        type : INCREMENT,
    }
}

export const decrement = () => {
    return {
         type : DECTREMENT,
    }
}

export const reset = () => {
    return {
        type : RESET,
    }
}