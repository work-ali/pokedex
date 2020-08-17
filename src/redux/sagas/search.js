import {put, takeLatest, call} from "redux-saga/effects";
import getSearchedPokemon from "../actions/search";
import TYPES from "../types/index";

function* searchPokemon(action) {
  try {
    const data = yield call(getSearchedPokemon, action.searchTerm);
    if (!data.payload) {
      throw new Error("No data found");
    }
    yield put({
      type: TYPES.SEARCH.SUCCESS,
      payload: data.payload,
    });
  } catch (error) {
    yield put({type: TYPES.SEARCH.FAILURE});
  }
}

export default function* searchPokemonSaga() {
  yield takeLatest(TYPES.SEARCH.RESQUEST, searchPokemon);
}
