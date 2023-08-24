import { put, takeLatest, call } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_Major" actions
function* addToUserFuture(action) {
    console.log('!!!!!Are we in the ADD TO');
    try {
        // Make an API call to update the user_future_table
        yield call(fetch, '/api/update-user-future', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(action.payload), // Send the updated data
        });
      } catch (error) {
        console.log('Update user future table failed', error);
      }
}

function* addToUserFutureSaga() {
  yield takeLatest('UPDATE_USER_FUTURE_TABLE', addToUserFuture);
}



export default addToUserFutureSaga;

