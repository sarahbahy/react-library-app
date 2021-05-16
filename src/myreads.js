import React from 'react'
import { Link } from 'react-router-dom';
import Bookshelf from './bookshelf'
import * as BooksAPI from './BooksAPI'
export default class Myreads extends React.Component {
        componentDidMount(){
            BooksAPI.getAll().then( books => {
                this.setState({books:books});
                console.log(this.state.books);
            }).then(()=>{
                this.setState({currentlyReading:this.state.books.filter(
                    book=>(book.shelf ==="currentlyReading")
                    )
                });
                this.setState({wantToRead:this.state.books.filter(
                        book=>(book.shelf ==="wantToRead")
                    )
                });
                this.setState({read:this.state.books.filter(
                    book=>(book.shelf ==="read")
                    )
                });
            })
        }
        state = {
            books: [],
            currentlyReading: [],
            wantToRead: [],
            read: [],
          }
          updateShelf = (newbook,shelf) =>{
            console.log(newbook)
            let oldShelf = this.state[newbook.shelf]
            BooksAPI.update(newbook,shelf).then( res => {
                console.log(res)
                // newbook.shelf = shelf 
              })
            let newShelf = this.state[shelf]
            let newBooks = newShelf.filter(
                book=>(book.id !== newbook.id)
            )
            newBooks.push(newbook);
            if(shelf == "currentlyReading" ){
                this.setState({currentlyReading:newBooks});}
                else if (shelf == "wantToRead" ){
                    this.setState({wantToRead:newBooks});
                }else if (shelf == "read" ){
                    this.setState({read:newBooks});
                }
            let oldBooks = oldShelf.filter(
                book=>(book.id !== newbook.id)
            )
            if(newbook.shelf == "currentlyReading" ){
            this.setState({currentlyReading:oldBooks});}
            else if (newbook.shelf == "wantToRead" ){
                this.setState({wantToRead:oldBooks});
            }else if (newbook.shelf == "read" ){
                this.setState({read:oldBooks});
            }
                
          }
          render() {
            return (
                <div className="app">
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                        <Bookshelf shelfTitle="Currently Reading" books={this.state.currentlyReading} updateShelf={this.updateShelf}></Bookshelf>
                        <Bookshelf shelfTitle="Want to Read" books={this.state.wantToRead} updateShelf={this.updateShelf}></Bookshelf>
                        <Bookshelf shelfTitle="Read" books={this.state.read} updateShelf={this.updateShelf}></Bookshelf>
                        </div>
                        </div>
                <div className="open-search">
                    <Link to="/search"></Link>
                </div>
            </div>
            )
        }
}