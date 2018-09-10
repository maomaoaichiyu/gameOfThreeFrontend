import React, { Component } from 'react';
import './components.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { send, showOwnMove, showErrorMessage } from '../actions';

class GameInteraction extends Component {
  constructor(props) {
    super(props);
    this.state = { step: -1 };
  }

  sendButtonClick = () => {
    const { step } = this.state;
    const { sendResultNumber, receivedNumber, showMove, showErrorMessage } = this.props;
    let stepNumber = parseInt(step, 10);
    if ((receivedNumber + stepNumber) % 3 === 0) {
      let resultNumber = (receivedNumber + stepNumber) / 3;
      showMove(stepNumber, resultNumber);
      sendResultNumber(resultNumber);
    } else {
      showErrorMessage();
    }
  }

  handleChange = (event) => {
    this.setState({ step: event.target.value });
  }

  render() {
    const { step } = this.state;
    const { gameState } = this.props;
    return (
      <div className="GameInteractionBlock">
        <div className="ChooseTitle">Choose a step:</div>
        <div className="Choice">
          <label htmlFor="-1">
            <input type="radio" onChange={this.handleChange} id="-1" name="choice" value="-1" />
            -1
          </label>
          <label htmlFor="0">
            <input type="radio" onChange={this.handleChange} id="0" name="choice" value="0" />
            &nbsp;0
          </label>
          <label htmlFor="1">
            <input type="radio" onChange={this.handleChange} id="1" name="choice" value="1" />
            &nbsp;1
          </label>
        </div>
        <button
          className="InteractionButton"
          type="button"
          onClick={this.sendButtonClick}
          disabled={!step || gameState !== 'move'}
        >
          Send
        </button>
      </div>
    );
  }
}

GameInteraction.propTypes = {
  gameState: PropTypes.string.isRequired,
  receivedNumber: PropTypes.number,
  sendResultNumber:  PropTypes.func.isRequired,
  showMove: PropTypes.func.isRequired,
  showErrorMessage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  gameState: state.gameStateReducer.status,
  receivedNumber: state.gameStateReducer.received_number,
});

const mapDispatchToProps = dispatch => ({
  sendResultNumber: number => dispatch(send(number)),
  showMove: (step, resultNumber) => dispatch(showOwnMove(step, resultNumber)),
  showErrorMessage: () => dispatch(showErrorMessage()),
});
export default connect(mapStateToProps, mapDispatchToProps)(GameInteraction);
