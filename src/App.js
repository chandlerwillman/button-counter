import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 0,
  };

  constructor() {
    super();

    this.clickUp = this.clickUp.bind(this);
    this.clickDown = this.clickDown.bind(this);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.clickUp}>&uarr;</button>

          <h1>{ this.state.count }</h1>

          <button onClick={this.clickDown}>&darr;</button>

          <hr />

          <h2>Current State:</h2>

          <pre>{JSON.stringify(this.state, null, 4)}</pre>
        </header>
      </div>
    );
  }

  clickUp() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  clickDown() {
    this.setState({
      count: this.state.count - 1,
    });
  }
}

export default App;
