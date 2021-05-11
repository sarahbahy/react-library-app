import React from 'react'
import Bookshelf from './bookshelf'
export default class Myreads extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showSearchPage: true,
          }
        }
        componentDidMount(){
            const res = fetch('')
            res.then(data => console.log(data.json) ) 
        }
          render() {
            return (
                <div className="app">
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                        <Bookshelf></Bookshelf>
                        </div>
                        </div>
                <div className="open-search">
                    <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                </div>
            </div>
            )
        }
}