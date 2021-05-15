import React from 'react'
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Selector from './selector'
class Search extends React.Component {

  state = {
    searchedBooks: [],
    error:'No books match your search',
    showError:false,
  }

  render() {
    return (
        <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/"></Link>
          <div className="search-books-input-wrapper">
            
            <input type="text"
            onChange={ event =>{
              if(event.target.value.length > 0){
               BooksAPI.search(event.target.value)
               .then(data =>
                {console.log(data);
                  if( !data.error){this.setState(()=>({searchedBooks:data,showError:false}))}
                  else{this.setState(()=>({searchedBooks:[],showError:true}))}
                }
                ).catch(() =>{this.setState({searchedBooks:[],showError:true})})
              } 
              else{this.setState(()=>({searchedBooks:[],showError:false}))}
            }
            }
            placeholder="Search by title or author"/>
        
          </div>
        </div>
        <div className="search-books-results">
          {this.state.showError? (<h1>{this.state.error}</h1>):('')}
          <ol className="books-grid">
            {this.state.searchedBooks.map(book =>
              ( <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail: ''})`, }}></div>
                        <div className="book-shelf-changer">
                        <Selector book={book}/>
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
    )
}
}
export default Search