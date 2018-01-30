import React, { Component } from 'react';

class ListItem extends Component {

  handleDelete(id) {
    this.props.deletePerson(this.props.person.id);
    // console.log(this);
  }

  render() {
    const {person} = this.props;

    return (
      <tr className="person" id={'person-' + person['id']}>
        <td>{person['first_name']}</td>
        <td>{person['last_name']}</td>
        <td>
          <button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>
            <i className="glyphicon glyphicon-remove"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default ListItem;
