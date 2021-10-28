import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Dennis", age: "25" },
      { id: "2", name: "Ritchie", age: "25" },
      { id: "3", name: "Linus", age: "25" },
    ],
    showPersons: false,
  };

  randomNumGen = () => {
    return Math.floor(Math.random() * 30);
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: this.randomNumGen() },
        { name: "Zax", age: this.randomNumGen() },
        { name: "Baldur", age: this.randomNumGen() },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 35 },
        { name: "Ella", age: 45 },
        { name: "Baldur", age: 22 },
      ],
    });
  };

  deletePersonhandler = (personIndex) => {
    // const persons = this.state.persons.slice(); //older approach
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      style.backgroundColor = "red";
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={this.deletePersonhandler.bind(index)}
                name={person.name}
                age={person.age}
                key={index}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className='App'>
        <h1>Hello, I'm React</h1>
        <h1>But Who are you ?</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle ?
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
