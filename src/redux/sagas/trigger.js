import {put, takeLatest, call} from "redux-saga/effects";
import getPokemonEvolutionTrigger from "../actions/trigger";
import TYPES from "../types/index";

function* pokemonEvolutionTrigger(action) {
  try {
    const data = yield call(getPokemonEvolutionTrigger, action.pokemonId);

    if (!data.payload) {
      throw new Error("No data found");
    }
    yield put({
      type: TYPES.TRIGGER.SUCCESS,
      payload: data.payload,
    });
  } catch (error) {
    yield put({type: TYPES.TRIGGER.FAILURE});
  }
}

export default function* pokemonEvolutionTriggerSaga() {
  yield takeLatest(TYPES.TRIGGER.RESQUEST, pokemonEvolutionTrigger);
}
