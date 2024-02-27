const userFutureUpdateReducer = (state = [], action) => {
    switch (action.type) {
      case 'UPDATE_USER_FUTURE_TABLE_NOW':
        return state.map((item) =>
            item.id === action.selectedId ? { ...item, ...action.payload } : item
        );
    
        
      default:
        return state;
    }
  };
  
  export default userFutureUpdateReducer;
  