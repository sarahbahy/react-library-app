import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route , BrowserRouter, Switch, Router} from 'react-router-dom'
import search from './search'
import Myreads from './myreads'
class BookApp extends React.Component {
  render() {
    /// hello from peter 
    return(
      <React.Fragment>
        <BrowserRouter>
        <Switch>
        <Route path="/search" component={search}>
        </Route>
        <Route path="/" component={Myreads}>
        </Route>
        </Switch>
        </BrowserRouter>
    </React.Fragment>
    )
  }
}

export default BookApp
