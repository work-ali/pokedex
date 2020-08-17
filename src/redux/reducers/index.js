import {combineReducers} from "redux";
import search from "./search";
import pokemonEvolution from "./evolution";
import pokemonEvolutionTrigger from "./trigger";

const rootReducer = combineReducers({
  search,
  pokemonEvolution,
  pokemonEvolutionTrigger,
});

export default rootReducer;
