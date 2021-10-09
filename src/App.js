import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            { name: 'Dennis', age:"25"},
            { name: 'Ritchie', age:"25"},
            { name: 'Linus', age:"25"}
        ]
    };

    randomNumGen = () => {
        return Math.floor(Math.random() * 30);
    };

    switchNameHandler = (newName) => {
        this.setState(
            { persons: [
                {name: newName, age: this.randomNumGen()},
                {name: 'Zax', age: this.randomNumGen()},
                {name: 'Baldur', age: this.randomNumGen()},
            ]
        });
    };

    render() {
        return (
            <div className="App">
            <h1>Hello, I'm React</h1>
            <h1>But Who are you ?</h1>
            <button onClick={() => this.switchNameHandler("Ziga")}> Or Are You ? </button>
            <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}/>
            <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'beatrice')}>
                I am different because I have a hobby
            </Person>
            <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>
            </div>
        );
    };
}

export default App;
