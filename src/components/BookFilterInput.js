import React from 'react';


const BookFilter = ({findbook}) => {
    
  return (
     <div>
        <input type="text" onChange={findbook}/>
      </div>
    )
}


export default BookFilter;