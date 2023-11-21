
import {BUY_BOOK ,SELL_BOOK} from '../constants/bookActionTypes'


export const buyBook =(number)=>{
    
return {
    type: BUY_BOOK,
    payload : number
}
}
export const sellBook =(number)=>{
    return {
        type: SELL_BOOK,
        payload : number
    }

}