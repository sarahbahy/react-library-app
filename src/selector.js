import React from 'react'
import * as BooksAPI from './BooksAPI'
class Selector extends React.Component {
  render() {
    const book  = this.props.book;
    return(
            <select
            value={book.shelf?book.shelf : 'none'}
             onChange={
              (event)=> {
                console.log(book)
                BooksAPI.update(book, event.target.value).then( res => {
                  console.log(res)
                })
              }}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
          ) 
 }
}
export default Selector