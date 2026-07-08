import { BUY_BOOK, SALE_BOOK } from "./BookTypes"; 


export const buyBook = () => {
    return {
        type : BUY_BOOK,
    }
}

export const saleBook = () => {
    return {
         type : SALE_BOOK,
    }
}