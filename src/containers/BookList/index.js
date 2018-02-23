
import React from 'react';
import BookListItem from '../../components/BookListItem'
// import BookFilter from '../../components/BookFilterInput'


const BookList = ({ books, findbook }) => {
  console.log(books)
  
  return (
    <div className="book-list-container">
    {
      books
    //  .filter(elem=>{
    //    console.log(elem);
    //     return (
    //       elem.title.indexOf(findbook)>=0||
    //       elem.author.indexOf(findbook) >=0
    //     )
    //   })
      .map((book, index) => {
        console.log(book)
        return (
          <BookListItem key={ index } book={ book } />
           //react needs a key whenever iterating, 
        )
      })
      
    }
    </div>

  )
}

export default BookList;