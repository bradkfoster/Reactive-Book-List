import React, { Component } from 'react';
import {getBooksFromFakeXHR as getBooks} from '../lib/books.db';
import BookList from '../components/BookListAppTitle';
import NameTag from '../components/NameTag'

console.log(getBooks)






class App extends Component {
  constructor(){
    super();
   
    this.state = {
      bookList: []
    }
  }
  componentDidMount(){
    getBooks()
    .then(bookList=>{
      this.setState({
        bookList
      })
    })
  }

 





  render() {
    return (
      <div className="App">
        <h1>BOOK APP</h1>
        <NameTag name ="Book Title" />

        <BookList books={this.state.bookList} />
      </div>
    );
  }
}

export default App;
