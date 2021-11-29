import { CREATE_MESSAGE } from "./types";

const initialState = {
  messages: [
    {
      name: "Pasha",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id est distinctio eum error iusto impedit, possimus veritatis maiores dignissimos incidunt.",
    },
    {
      name: "Sasha",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id est distinctio eum error iusto impedit, possimus veritatis maiores dignissimos incidunt.",
    },
    {
      name: "Kcusha",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id est distinctio eum error iusto impedit, possimus veritatis maiores dignissimos incidunt.",
    },
  ],
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MESSAGE: {
      // console.log("dddd>>", action.payload);
      return { ...state, messages: [...state.messages, { ...action.payload }] };
    }
    //return { ...state, messages: state.messages.concat(action.payload) };

    default:
      return state;
  }
};
