import { createStore } from "redux";

const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return { counter: state.counter + 1 };

    case "DECREAMENT":
      return { counter: state.counter - 1 };

    default:
      return state;
  }
};

const store = createStore(counterReducer);
export default store;
