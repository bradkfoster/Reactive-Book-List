export const ADD_BOOK = 'ADD_BOOK';


export const addBook = (book) => {
console.log('entering add function')
console.log('this is newBook',book)
  let anotherBook = {
    title: book.title,
    author: book.author
  }
  return {
    type: ADD_BOOK,
    book: anotherBook
  }
}

