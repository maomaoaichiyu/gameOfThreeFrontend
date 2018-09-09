/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './components.css';
import { connect } from 'react-redux';

class GameConsole extends Component {
  render() {
    return (
      <div className="GameConsole">
        <div className="LogTitle">Game log</div>
      </div>
    );
  }
}

export default connect()(GameConsole);
