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
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading"><h3>People</h3></div>
          <div className="panel-body">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>delete</th>
                </tr>
              </thead>
              <tbody>
                {people}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
