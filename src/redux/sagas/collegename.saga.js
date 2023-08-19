import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_Major" actions
function* fetchCollegeName() {
    console.log('Are we in the fetchmajor function?');
  try {
    const response = yield fetch('/api/college-name');
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const collegeName = yield response.json();
    console.log(collegeName, 'ONLY LOOK HERE')
    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_COLLEGE_NAME', payload: collegeName});
    console.log('is this where that payload is being set for college name?', collegeName)
  } catch (error) {
    console.log('College name get request failed', error);
  }
}

function* collegeNameSaga() {
    console.log('Are we in the college major saga?');
  yield takeLatest('FETCH_COLLEGE_NAME', fetchCollegeName);
}

export default collegeNameSaga;
