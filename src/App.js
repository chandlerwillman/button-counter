import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: '',
    image: '',
    inventory: [],
  };
  
  constructor(){
    super();

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  render() {
    const inventory = this.state.inventory
      .map((meme, index) => {
        <li key={index}>
          <h2>{meme.name}</h2>
          <img src={meme.image} alt={meme.name} />
          Quantity: {meme.quantity}
        </li>
      })

    return (
      <div className="App">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>
            Name: 
            <input 
              type="Text" 
              value={this.state.name}
              onChange={this.handleNameChange} />
          </label>
          <label>
            Image: 
            <input 
              type="text"
              value={this.state.image}
              onChange={this.handleImageChange} />
          </label>
          <label>
            Quantity: 
            <input type="text"/>
          </label>
          <button type="submit">Add</button>
        </form>
        
        <ul>
          {inventory}
        </ul>

      </div>
    );
  }

  handleNameChange(event){
    //console.log(event.target.value);
    
    this.setState({
      name: event.target.value,
    })
  }

  handleImageChange(event){
    this.setState({
      image: event.target.value,
    })
  }

  handleSubmit(event){
    event.preventDefault();

    const { name, image, quantity } = this.state;

    inventory.push({
      name,
      quantity,
      image,
    })

    this.setState({
      name: '',
      image: '',
      quantity: 0,
      inventory,
    })
  }
}

export default App;
