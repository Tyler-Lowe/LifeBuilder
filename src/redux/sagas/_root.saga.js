import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import collegeMajorSaga from './collegemajor.saga';
import collegeNameSaga from './collegename.saga'
import stateNameSaga from './statename.saga'
import updateUserFutureSaga from './userfuture.saga';
import fetchUserFutureSaga from './fetchuserfuture.saga';
import addToUserFutureSaga from './updateuserfuture.saga';
import deleteFutureSaga from './deletefuture.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    collegeMajorSaga(),
    collegeNameSaga(),
    stateNameSaga(),
    updateUserFutureSaga(),
    fetchUserFutureSaga(),
    addToUserFutureSaga(),
    deleteFutureSaga(),
  ]);
}
