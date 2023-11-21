import { combineReducers } from "redux";

import bookReducer from "./reducers/bookReducers";
import penReducer from "./reducers/penReducer";

const rootReducer = combineReducers({
book:bookReducer,
pen:penReducer

})

export default rootReducer