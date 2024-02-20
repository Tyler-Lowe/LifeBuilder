const initialState = {};

const userSelectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_SELECTIONS':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userSelectionsReducer;