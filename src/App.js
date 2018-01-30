import React, { Component } from 'react';

import List from "./components/List";
import Header from "./components/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    }
  }

  componentWillMount() {
    const people = require('./people.js');
    this.setState({
      people: people
    });
  }

  addPerson(newPerson) {
    let people = this.state.people;
    if(people.length > 0) {
      newPerson.id = people[people.length - 1]['id'] + 1;
    } else {
      newPerson.id = 1;
    }
    people.push(newPerson);
    this.setState({people:people});
  }

  deletePerson(id) {
    let people = this.state.people;
    let index = people.findIndex(x => x.id === id);
    people.splice(index, 1);
    this.setState({people:people});
    console.log(id);
  }

  render() {
    return (
      <div className="App">
        <Header addPerson={this.addPerson.bind(this)}/>
        <List className="container" people={this.state.people} deletePerson={this.deletePerson.bind(this)} />
      </div>
    );
  }
}

export default App;
