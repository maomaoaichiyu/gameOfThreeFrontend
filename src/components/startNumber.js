import React, { Component } from 'react';
import './components.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { send } from '../actions';

class StartNumber extends Component {
  constructor(props) {
    super(props);
    this.state = { startNumberInput: '' };
  }

  startButtonClick = () => {
    const { startNumberInput } = this.state;
    const { sendStartNumber } = this.props;
    sendStartNumber(parseInt(startNumberInput, 10));
  }

  handleChange = (event) => {
    this.setState({ startNumberInput: event.target.value });
  }

  render() {
    const { startNumberInput } = this.state;
    const { gameState } = this.props;
    return (
      <div className="StartBlock">
        <input
          type="number"
          value={startNumberInput}
          onChange={this.handleChange}
          placeholder="Input a start number..."
        />
        <button
          className="StartButton"
          type="button"
          onClick={this.startButtonClick}
          disabled={!startNumberInput || gameState !== 'start'}
        >
          Start
        </button>
      </div>
    );
  }
}

StartNumber.propTypes = {
  gameState: PropTypes.string.isRequired,
  sendStartNumber: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  gameState: state.gameStateReducer.status,
});

const mapDispatchToProps = dispatch => ({
  sendStartNumber: number => dispatch(send(number)),
});


export default connect(mapStateToProps, mapDispatchToProps)(StartNumber);
