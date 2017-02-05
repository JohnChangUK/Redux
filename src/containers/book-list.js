import React, { Component } from 'react';

export default class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
          <li key={book.title} className="list-group-item">{book.title}</li>
        );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
      )
  }
}

// Container is more like a route's handler, which also pulls redux's state
//for that route. Then I pass down my state as prop

//Container is a component that has direct access to the state 
// produce