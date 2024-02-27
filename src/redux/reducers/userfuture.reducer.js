const userFutureReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_USER_FUTURE':
      return action.payload;
    case 'SET_FUTURE':
      return action.payload;
      case 'UPDATE_USER_FUTURE_TABLE_NOW':
        // Ensure action.payload would be an array of objects in this scenario
        return action.payload;
      
    default:
      return state;
  }
};

export default userFutureReducer;
