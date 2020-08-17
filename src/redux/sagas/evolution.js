import {put, takeLatest, call} from "redux-saga/effects";
import getPokemonEvolution from "../actions/evolution";
import TYPES from "../types/index";

function* pokemonEvolution(action) {
  try {
    const data = yield call(getPokemonEvolution, action.pokemonId);
    if (!data.payload) {
      throw new Error("No data found");
    }
    yield put({
      type: TYPES.EVOLUTION.SUCCESS,
      payload: data.payload,
    });
  } catch (error) {
    yield put({type: TYPES.EVOLUTION.FAILURE});
  }
}

export default function* pokemonEvolutionSaga() {
  yield takeLatest(TYPES.EVOLUTION.RESQUEST, pokemonEvolution);
}
