import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "LOGIN" actions
function* loginUser(action) {
  try {
    // clear any existing error on the login page
    yield put({ type: 'CLEAR_LOGIN_ERROR' });

    // send the action.payload as the body
    // the config includes credentials which
    // allow the server session to recognize the user
    const response = yield fetch('/api/user/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload),
    });
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }

    // after the user has logged in
    // get the user information from the server
    yield put({ type: 'FETCH_USER' });
  } catch (error) {
    console.log('Error with user login:', error);
    if (error.response.status === 401) {
      // The 401 is the error status sent from passport
      // if user isn't in the database or
      // if the username and password don't match in the database
      yield put({ type: 'LOGIN_FAILED' });
    } else {
      // Got an error that wasn't a 401
      // Could be anything, but most common cause is the server is not started
      yield put({ type: 'LOGIN_FAILED_NO_CODE' });
    }
  }
}

// worker Saga: will be fired on "LOGOUT" actions
function* logoutUser() {
  try {
    const response = yield fetch('/api/user/logout', {
      method: "POST",
    });
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }

    // now that the session has ended on the server
    // remove the client-side user object to let
    // the client-side code know the user is logged out
    yield put({ type: 'UNSET_USER' });
  } catch (error) {
    console.log('Error with user logout:', error);
  }
}

function* loginSaga() {
  yield takeLatest('LOGIN', loginUser);
  yield takeLatest('LOGOUT', logoutUser);
}

export default loginSaga;