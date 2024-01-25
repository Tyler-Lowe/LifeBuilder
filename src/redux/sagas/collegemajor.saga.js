import { put, takeLatest } from 'redux-saga/effects';

// Worker Saga: will be fired on "FETCH_COLLEGE_NAME" actions
function* fetchCollegeMajor(action) {
    try {
        // Log to verify the function is being called
        console.log('In fetchCollegeMajor function', action);

        // Extracting the payload (selected state) from the action
        const selectedCollege = action.payload;
        console.log(selectedCollege);

        // Modify the API endpoint to include the selected state
        const response = yield fetch(`/api/college-major?college=${selectedCollege}`);
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        const collegeMajor = yield response.json();

        // Dispatch action to set college names in the Redux store
        yield put({ type: 'SET_COLLEGE_MAJOR', payload: collegeMajor });
    } catch (error) {
        console.log('College Major get request failed', error);
    }
}

function* collegeMajorSaga() {
    yield takeLatest('FETCH_COLLEGE_MAJOR', fetchCollegeMajor);
}

export default collegeMajorSaga;
