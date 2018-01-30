import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      newPerson: {}
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const input = this.refs.title.value;
    const {addPerson} = this.props;

    if(input === '') {
      alert('Input!');
    } else {
      let newPerson = input.split(" ");
      this.setState({
        newPerson: {
          first_name: newPerson[0],
          last_name: newPerson[1]
        }
      }, function() {
        addPerson(this.state.newPerson);
      });
    }
  }

  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">Add Person</h1>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <div className="input-group">
            <input type="text" className="form-control" placeholder="first name, last name" ref="title" />
            <div className="input-group-btn">
              <button className="btn btn-success" type="submit">
                <i className="glyphicon glyphicon-plus"></i>
              </button>
            </div>
          </div>
        </form>
      </header>
    );
  }
}

export default Header;
