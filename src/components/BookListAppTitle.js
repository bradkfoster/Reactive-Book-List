import React from 'react';


const BookList = ({books}) =>{
  return (  
    <div className="book-list">
    {
      books.map((book)=>{
        return (
          <div className = 'bookListContainer'>
            <div>{book.title}</div>
            
            <div>{book.author}</div>
          </div>
        )
      })
    }
    </div>
  )
}

export default BookList;