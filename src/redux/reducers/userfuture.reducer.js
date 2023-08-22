const userFutureReducer = (state = [], action) => {
    switch (action.type) {
      case 'UPDATE_USER_FUTURE':
        return action.payload;
        case 'SET_FUTURE':
          return action.payload;
      default:
        return state;
    }
  };
  
  export default userFutureReducer;
  