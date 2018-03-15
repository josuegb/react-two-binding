import React, { Component } from 'react';
import './App.scss';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {

  state = {
    username: 'Perro Pro User',
    articles: [
      {
        text1: ' text pro 1',
        text2: ' text pro 2'        
      },
      {
        text1: ' text pro 1.2',
        text2: ' text pro 2.2'
      }
    ]
  }

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value,
      articles: [
        {
          text1: ' text pro 1',
          text2: ' text pro 2'
        },
        {
          text1: ' text pro 1.2',
          text2: ' text pro 2.2'
        }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Perro Loco</h1>
        <UserInput
          changed={this.usernameChangeHandler} 
          username={this.state.username}/>
        <UserOutput 
          username={this.state.username} 
          text1={this.state.articles[0].text1} 
          text2={this.state.articles[0].text2}/>     
        <UserOutput
          username={this.state.username}
          text1={this.state.articles[1].text1}
          text2={this.state.articles[1].text2} />                             
      </div>
    );
  }
}

export default App;
