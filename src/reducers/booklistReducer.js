import { ADD_BOOK } from "../actions/booklistAction";

const initialState = {
  nextId: 4,
  books: [
    {
      _id: 1,
      title: "Talion: The Revenant from DB",
      author: "Michael A. Stackpole"
    },
    {
      _id: 2,
      title: "Ready Player One from DB",
      author: "Ernest Cline"
    },
    {
      _id: 3,
      title: "Enders Game from DB",
      author: "Orson Scott Card"
    }
  ]
}


export default(state = initialState, action = {}) =>{
  switch(action.type){
    case ADD_BOOK:
    action.book.nextId = state.nextId;
    const updatedBooks = state.books.concat(action.book);
    
    return {...state, books: updatedBooks, nextId: state.nextId + 1}
      
    default:
    return state;
  }
}
