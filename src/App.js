import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks.js'
import * as BooksAPI from './BooksAPI'
import './App.css'


class BooksApp extends React.Component {
  // get the state of the page
  state = {
    books: []

  }
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false

    // Get the api data
    componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    }

    render() {
      return (
        <div className="app">
          <Route exact path='/' render={() => (
              <ListBooks
                books={this.state.books}
              />
          )}/>
        </div>
    )
  }
}

export default BooksApp
