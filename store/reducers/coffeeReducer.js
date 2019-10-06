import * as actionTypes from "../actions/types";

const initialState = {
  coffee: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_COFFEESHOPS:
      return {
        ...state,
        coffee: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
