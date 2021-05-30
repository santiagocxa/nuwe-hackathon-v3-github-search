const reducer = (state, action) => {
  switch(action.type){
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload
      }
    case 'LOGIN_REGISTER':
      return {
        ...state,
        user: action.payload
      }
    case 'LOGOUT':
      return {
        ...state,
        user:[]
      }
    default:
      return state;
  }
}

export default reducer;