import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_Major" actions
function* fetchMajor() {
    console.log('Are we in the fetchmajor function?');
  try {
    const response = yield fetch('/api/college-major');
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const collegeMajor = yield response.json();
    console.log(collegeMajor, 'ONLY LOOK HERE')
    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_MAJOR', payload: collegeMajor});
    console.log('is this where that payload is being set?', collegeMajor)
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* collegeMajorSaga() {
    console.log('Are we in the college major saga?');
  yield takeLatest('FETCH_MAJOR', fetchMajor);
}

export default collegeMajorSaga;
