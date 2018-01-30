import React, { Component } from 'react';
import ListItem from "./ListItem";

class List extends Component {
  render() {
    let people;
    if(this.props.people) {
      people = this.props.people.map(person => {
        return <ListItem key={person['id']} person={person} deletePerson={this.props.deletePerson} />
      });
    }

    return (
      <div className="">
        <div className="col-sm-12">
          <h3>People:</h3>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {people}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default List;
