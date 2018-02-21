import React from 'react';
import BookListItem from './BookListItem';

const BookList = ({books}) =>{
  return (  
    <div className="book-list">
    {
      books.map((book,ind)=>{
        return (
          <BookListItem title = {book.title} key = {ind} />
        )
      })
    }
    </div>
  )
}

export default BookList;