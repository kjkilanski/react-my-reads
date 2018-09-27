/* The Books */
import React, { Component } from 'react'
import PropTypes from 'prop-types';

class ListBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {

    return (
      <div>
      <h1>This is a test</h1>
      </div>
    )

  }

}

export default ListBooks