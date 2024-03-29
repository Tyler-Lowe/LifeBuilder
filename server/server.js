const express = require('express');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const stateNameRouter = require('./routes/statename.router');
const collegeMajorRouter = require('./routes/collegemajor.router');
const collegeNameRouter = require('./routes/collegename.router');
const userFutureRouter = require('./routes/userfuture.router');
const updateUserFutureRouter = require('./routes/updateuserfuture.router');
const deleteUserFutureRouter = require('./routes/deletefuture.router');

// Express middleware
app.use(express.json());
app.use((req, res, next)=>{
  console.log(req.method, req.url);
  console.log(req.body);
  next();
})

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/state-name', stateNameRouter);
app.use('/api/college-major', collegeMajorRouter);
app.use('/api/college-name', collegeNameRouter);
app.use('/api/user-future', userFutureRouter);
app.use('/api/update-user-future', updateUserFutureRouter);
app.use('/api/delete-user-future', deleteUserFutureRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 8002;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
