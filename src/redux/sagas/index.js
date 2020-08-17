import {all} from "redux-saga/effects";
import searchPokemonSaga from "./search";
import pokemonEvolutionSaga from "./evolution";
import pokemonEvolutionTriggerSaga from "./trigger";

export default function* rootSagas() {
  yield all([
    searchPokemonSaga(),
    pokemonEvolutionSaga(),
    pokemonEvolutionTriggerSaga(),
  ]);
}
