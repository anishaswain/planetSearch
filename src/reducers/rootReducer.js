import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  filters: filterReducer,
});

export default rootReducer;
