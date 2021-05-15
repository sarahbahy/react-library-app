import React from 'react'
import Bookshelf from './bookshelf'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom';
export default class Myreads extends React.Component {
        componentDidMount(){
            BooksAPI.getAll().then( books => {
                this.setState({books:books});
                console.log(this.state.books);
            }).then(()=>{
                this.setState({currentlyReadingBooks:this.state.books.filter(
                    book=>(book.shelf ==="currentlyReading")
                    )
                });
                this.setState({wantToReadBooks:this.state.books.filter(
                        book=>(book.shelf ==="wantToRead")
                    )
                });
                this.setState({readBooks:this.state.books.filter(
                    book=>(book.shelf ==="read")
                    )
                });
            })
        }
        state = {
            books: [],
            currentlyReadingBooks: [],
            wantToReadBooks: [],
            readBooks: [],
          }
          render() {
            return (
                <div className="app">
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                        <Bookshelf shelfTitle="Currently Reading" books={this.state.currentlyReadingBooks}></Bookshelf>
                        <Bookshelf shelfTitle="Want to Read" books={this.state.wantToReadBooks}></Bookshelf>
                        <Bookshelf shelfTitle="Read" books={this.state.readBooks}></Bookshelf>
                        </div>
                        </div>
                <div className="open-search">
                    <Link to="/search"></Link>
                </div>
            </div>
            )
        }
}