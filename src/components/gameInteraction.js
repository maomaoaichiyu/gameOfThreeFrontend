import React, { Component } from 'react';
import './components.css';
import { connect } from 'react-redux';

class GameInteraction extends Component {
  constructor(props) {
    super(props);
    this.state = { step: -1 };
  }

  sendButtonClick = () => {
  }

  handleChange = (event) => {
    this.setState({ step: event.target.value });
  }

  render() {
    const { step } = this.state;
    return (
      <div className="GameInteractionBlock">
        <div className="ChooseTitle">Choose a step:</div>
        <div className="Choice">
          <label htmlFor="-1">
            <input type="radio" id="-1" name="choice" value="-1" />
            -1
          </label>
          <label htmlFor="0">
            <input type="radio" id="0" name="choice" value="0" />
            &nbsp;0
          </label>
          <label htmlFor="1">
            <input type="radio" id="1" name="choice" value="1" />
            &nbsp;1
          </label>
        </div>
        <button
          className="InteractionButton"
          type="button"
          onClick={this.sendButtonClick}
          disabled={!step}
        >
          Send
        </button>
      </div>
    );
  }
}

export default connect()(GameInteraction);
