import React, { Component } from 'react';
import './App.css';
import StartNumber from './components/startNumber';
import GameInteraction from './components/gameInteraction';
import GameConsole from './components/gameConsole';
import { socket } from './actions';

class App extends Component {
  componentWillUnmount() {
    socket.close();
  }

  render() {
    return (
      <div className="App">
        <h2>Welcome to Game of Three!</h2>
        <div className="Main">
          <div className="StartAndChoice">
            <StartNumber />
            <GameInteraction />
          </div>
          <div className="Log">
            <GameConsole />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
