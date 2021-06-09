import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {
  // constructor will keep our state
  state = {
    name: 'Marc',
    dog: {
      name: 'Luke',
      age: 4,
    },
    counter: 0
  }


  // methods

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrease = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <div>
        <Header title='My first class component' />
        <h1>Hello {this.state.name}!</h1>
        <h2>And also hello to your dog {this.state.dog.name}!</h2>
        <p>Counter value: {this.state.counter}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrease}>-</button>
      </div>
    )
  }
}

export default App;