import React from 'react'
import './App.css'
import {Route , BrowserRouter, Switch} from 'react-router-dom'
import Search from './search'
import Myreads from './myreads'
class BookApp extends React.Component {
  render() {
    return(
      <React.Fragment>
        <BrowserRouter>
        <Switch>
        <Route path="/search" component={Search}></Route>
        <Route path="/" component={Myreads}></Route>
        </Switch>
        </BrowserRouter>
    </React.Fragment>
    )
  }
}

export default BookApp
 