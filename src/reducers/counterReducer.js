const initialState = { count: 0 }
  
  function counterReducer(state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: Math.max(state.count - 1, 0) }; // Empêche le compteur d'aller en-dessous de 0
      default:
        return state;
    }
  }
  
  export default counterReducer;
  