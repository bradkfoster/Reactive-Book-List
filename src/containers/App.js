import React, { Component } from 'react';
import {getBooksFromFakeXHR as getBooks} from '../lib/books.db';
import {connect} from 'react-redux';
// import BookList from '../components/BookListAppTitle';
import NameTag from '../components/BookListAppTitle'
import AddedBook from './NewBookForm/index'
import BookList from '../containers/BookList/index'
import BookFilter from '../components/BookFilterInput';
import {addBook} from '../actions/booklistAction';











class App extends Component {
  constructor(props){
    super(props);
   
    console.log(this.props)
  }

 
  

 

  // foundBook(event){
  //   const findbook = event.target.value
  //   this.setState({findbook})
  // }
 



  

  render() {
    return (
  
      // <div className="App">
      //   <h1>BOOK APP</h1>
        // <NameTag name ="Book Title" />
        // <BookFilter findbook={this.foundBook.bind(this)}/>
      <div>
        <BookList books={this.props.books} />
        <AddedBook props={this.props} />
      </div>
    );
  }
}

const mapStateToProps = state =>{
  
  return {
   
    books:state.booklist.books,
    nextId:state.booklist.nextId
  }
}
const mapDispatchToProps = {
  addBook
}

const ConnectedApp = connect (
  mapStateToProps,
  mapDispatchToProps
)(App)



export default ConnectedApp;
