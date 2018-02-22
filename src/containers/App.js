import React, { Component } from 'react';
import {getBooksFromFakeXHR as getBooks} from '../lib/books.db';
import {addBookToFakeXHR as addBook} from '../lib/books.db';
import BookList from '../components/BookListAppTitle';
import NameTag from '../components/NameTag'
import AddedBook from './NewBookForm/index'









class App extends Component {
  constructor(props){
    super(props);
   
    this.state = {
      bookList: [],
      }
     
  }

  componentDidMount(){
    getBooks()
    .then(result=>{
      this.setState({
        bookList:result
      })
    })
  }

  newBook(book){
    let anotherBook = {
      title: book.title,
      author: book.author
    }
    addBook(anotherBook)
      .then(resultTwo => {
        console.log(resultTwo);
        
        this.setState({bookList: resultTwo})
      })
  }
 





  render() {
    return (
      <div className="App">
        <h1>BOOK APP</h1>
        <NameTag name ="Book Title" />

        <BookList books={this.state.bookList} />
        <AddedBook newBook={this.newBook.bind(this)} />
      </div>
    );
  }
}

export default App;
