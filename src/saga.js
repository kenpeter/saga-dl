// take latest, call api, put (fire)
import { takeLatest, call, put } from "redux-saga/effects";
// api
import axios from "axios";

// watch everything
export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

// get dog via axios
function fetchDog() {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breeds/image/random"
  });
}

// saga worker
function* workerSaga() {
  try {
    // api
    const response = yield call(fetchDog);
    // data
    const dog = response.data.message;

    // all good
    yield put({ type: "API_CALL_SUCCESS", dog });
  
  } catch (error) {
    // bad
    yield put({ type: "API_CALL_FAILURE", error });
  }
}