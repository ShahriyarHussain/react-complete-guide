import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";


class App extends Component {
  state = {
    persons: [
      { name: "Dennis", age: "25" },
      { name: "Ritchie", age: "25" },
      { name: "Linus", age: "25" },
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
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
      const style = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
      };

    return (
      <div className="App">
        <h1>Hello, I'm React</h1>
        <h1>But Who are you ?</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle ?
        </button>
       { this.state.showPersons ? 
         <div>       
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "tyla")}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "beatrice")}
        >
          I am different because I have a hobby
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
       </div> : null
       }
      </div>
    );
    }
}

export default App;
