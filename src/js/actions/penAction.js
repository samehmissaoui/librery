
import {BUY_PEN ,SELL_PEN} from '../constants/penActionType'


export const buyPen =(number)=>{
    
return {
    type: BUY_PEN,
    payload : number
}
}
export const sellPen =(number)=>{
    return {
        type: SELL_PEN,
        payload : number
    }

}