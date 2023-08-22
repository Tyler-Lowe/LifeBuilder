import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_Major" actions
function* fetchUserFuture() {
    console.log('Are we in the fetchmajor function?');
  try {
    const response = yield fetch('/api/user-future');
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const userFuture = yield response.json();
    console.log(userFuture, 'ONLY LOOK HERE')
    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_FUTURE', payload: userFuture});
    console.log('is this where that payload is being set for user Future name?', userFuture)
  } catch (error) {
    console.log('College name get request failed', error);
  }
}

function* fetchUserFutureSaga() {
    console.log('Are we in the college major saga?');
  yield takeLatest('FETCH_USER_FUTURE', fetchUserFuture);
}

export default fetchUserFutureSaga;
