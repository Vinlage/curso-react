import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = 
  {
    ninjas: 
    [
      {name: 'Vinicius', age: 28, belt: 'black', id: 1},
      {name: 'Jessica', age: 30, belt: 'green', id: 2},
      {name: 'Victoria', age: 5, belt: 'pink', id: 3}
    ]
  }
  addNinja = (ninja) =>
  {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) =>
  {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
