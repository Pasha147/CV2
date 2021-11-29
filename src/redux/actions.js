import { CREATE_MESSAGE, FILTER_OFF, FILTER_ON } from "./types";

export function createMessage(message) {
  //   console.log("act>", message);
  return {
    type: CREATE_MESSAGE,
    payload: message,
  };
}

export function filterOn() {
  return {
    type: FILTER_ON,
    payload: true,
  };
}

export function filterOff() {
  return {
    type: FILTER_OFF,
    payload: false,
  };
}
