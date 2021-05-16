import React from 'react'
import Selector from './selector'
export default class Bookshelf extends React.Component {

          render() {  
            const shelfTitle = this.props.shelfTitle;
            // const updateShelf = this.props.updateShelf;
        return (
            <div>
            <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {this.props.books.map(book =>
              ( <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail: ''})`, }}></div>
                        <div className="book-shelf-changer">
                        <Selector book={book} updateShelf={this.props.updateShelf}/>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                    </div>
              </li>)
              )}
                </ol>
            </div>
            </div>
            </div>
            )
        }
}