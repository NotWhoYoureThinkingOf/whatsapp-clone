// what the app looks like before we do anything to it
export const initialState = {
  user:null,
  chatroom: null,
}

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_CHATROOMS: "SET_CHATROOMS",
}

const reducer = (state, action) => {
  console.log(action);
  switch(action.type){
    case actionTypes.SET_USER:
      return{
        ...state, 
        user: action.user
      };
    case actionTypes.SET_CHATROOMS:
      return{
        ...state, 
        chatrooms: action.chatrooms
      };
    default:
      return state;
  }
};

export default reducer;