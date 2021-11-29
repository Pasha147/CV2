import { combineReducers } from "redux";
import { messageReducer } from "./messageReducer";
import { skillsReducer } from "./skillsReducer";

export const rootReducer = combineReducers({
  messages: messageReducer,
  skills: skillsReducer,
});
