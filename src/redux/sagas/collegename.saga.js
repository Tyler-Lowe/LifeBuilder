import { put, takeLatest } from 'redux-saga/effects';

// Worker Saga: will be fired on "FETCH_COLLEGE_NAME" actions
function* fetchCollegeName(action) {
    try {
        // Log to verify the function is being called
        console.log('In fetchCollegeName function', action);

        // Extracting the payload (selected state) from the action
        const selectedState = action.payload;

        // Modify the API endpoint to include the selected state
        const response = yield fetch(`/api/college-name?state=${selectedState}`);
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        const collegeName = yield response.json();

        // Dispatch action to set college names in the Redux store
        yield put({ type: 'SET_COLLEGE_NAME', payload: collegeName });
    } catch (error) {
        console.log('College name get request failed', error);
    }
}

function* collegeNameSaga() {
    yield takeLatest('FETCH_COLLEGE_NAME', fetchCollegeName);
}

export default collegeNameSaga;
