import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "REGISTER" actions
function* updateUserFuture(action) {
    console.log('Update user future here?');
  try {
    const response = yield fetch('/api/user-future', {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload),
    });
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
  } catch (error) {
    console.log('Error with updating user future', error);
  }
}

function* updateUserFutureSaga() {
  yield takeLatest('UPDATE_USER_FUTURE', updateUserFuture);
}

export default updateUserFutureSaga;
