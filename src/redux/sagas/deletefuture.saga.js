import { put, takeLatest, call } from 'redux-saga/effects';

function* removeThisFuture(action) {
    try {
        const response = yield call(fetch, '/api/delete-user-future', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(action.payload), // Include the payload here
      },);
      if (response.ok) {
        console.log('Is the delete ok?', response)
        
      } else {
        // Handle errors if needed
      }
    } catch (error) {
      // Handle errors
    }
  }


function* deleteFutureSaga() {
    yield takeLatest('DELETE_THIS_ROW', removeThisFuture);
  }

  export default deleteFutureSaga;