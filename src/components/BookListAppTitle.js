import React from 'react';


const BookList = ({books}) =>{
  return (  
    <div className="book-list">
    {
      books.map((book)=>{
        return (
         <div>{book.title}</div>
        )
      })
    }
    </div>
  )
}

export default BookList;