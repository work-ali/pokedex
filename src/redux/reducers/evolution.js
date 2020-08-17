import TYPES from "../types";

const initialState = {
  isLoading: false,
  chain: {},
};

const pokemonEvolution = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.EVOLUTION.RESQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case TYPES.EVOLUTION.SUCCESS:
      return {
        ...state,
        isLoading: false,
        chain: action.payload,
      };
    case TYPES.EVOLUTION.FAILURE:
      return {
        ...state,
        isLoading: false,
        chain: {},
      };
    default:
      return state;
  }
};

export default pokemonEvolution;
