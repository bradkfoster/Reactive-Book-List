import React, { Component } from 'react';
import {getBooksFromFakeXHR as getBooks} from '../lib/books.db';
import {addBookToFakeXHR as addBook} from '../lib/books.db';
// import BookList from '../components/BookListAppTitle';
import NameTag from '../components/BookListAppTitle'
import AddedBook from './NewBookForm/index'
import BookList from '../containers/BookList/index'
import BookFilter from '../components/BookFilterInput';









class App extends Component {
  constructor(props){
    super(props);
   
    this.state = {
      bookList: [],
      findbook: ''
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

  foundBook(event){
    const findbook = event.target.value
    this.setState({findbook})
  }
 





  render() {
    return (
      <div className="App">
        <h1>BOOK APP</h1>
        <NameTag name ="Book Title" />
        <BookFilter findbook={this.foundBook.bind(this)}/>
        <BookList books={this.state.bookList} findbook ={this.state.findbook}/>
        <AddedBook newBook={this.newBook.bind(this)} />
      </div>
    );
  }
}

export default App;
