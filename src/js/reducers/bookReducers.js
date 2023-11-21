import { BUY_BOOK ,SELL_BOOK} from "../constants/bookActionTypes"


const initialState = {
    numberOfBook : 10
}

const bookReducer = ( state = initialState, action) => {
    
    switch (action.type) {

case BUY_BOOK :
    return {
   ...state,
   numberOfBook : state.numberOfBook + parseInt(action.payload) ,
    }

  case SELL_BOOK:
    return {
        ...state,
        numberOfBook : state.numberOfBook - parseInt(action.payload) 
    }  
default:
return state
    }
}

export default bookReducer