import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_Major" actions
function* fetchStateName() {
    console.log('Are we in the fetch state function?');
  try {
    const response = yield fetch('/api/state-name');
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const stateName = yield response.json();
    console.log(stateName, 'ONLY LOOK HERE')
    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_STATE', payload: stateName});
    console.log('is this where that payload is being set for state name?', stateName)
  } catch (error) {
    console.log('State name get request failed', error);
  }
}

function* stateNameSaga() {
    console.log('Are we in the state major saga?');
  yield takeLatest('FETCH_STATE_NAME', fetchStateName);
}

export default stateNameSaga;
