const stateNameReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_STATE':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default stateNameReducer;
  