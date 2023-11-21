import { BUY_PEN ,SELL_PEN} from "../constants/penActionType"


const initialState = {
    numberOfPen : 10
}

const penReducer = ( state = initialState, action) => {
    
    switch (action.type) {

case BUY_PEN :
    return {
   ...state,
   numberOfPen : state.numberOfPen + parseInt(action.payload) ,
    }

  case SELL_PEN:
    return {
        ...state,
        numberOfPen : state.numberOfPen - parseInt(action.payload) 
    }  
default:
return state
    }
}

export default penReducer