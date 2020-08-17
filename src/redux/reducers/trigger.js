import TYPES from "../types";

const initialState = {
  isLoading: false,
  trigger: "",
};

const pokemonEvolutionTrigger = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.TRIGGER.RESQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case TYPES.TRIGGER.SUCCESS:
      return {
        ...state,
        isLoading: false,
        trigger: action.payload,
      };
    case TYPES.TRIGGER.FAILURE:
      return {
        ...state,
        isLoading: false,
        trigger: "",
      };
    default:
      return state;
  }
};

export default pokemonEvolutionTrigger;
