import React, { Component } from 'react';
import './components.css';
import { connect } from 'react-redux';

class StartNumber extends Component {
  constructor(props) {
    super(props);
    this.state = { startNumberInput: '' };
  }

  startButtonClick = () => {
  }

  handleChange = (event) => {
    this.setState({ startNumberInput: event.target.value });
  }

  render() {
    const { startNumberInput } = this.state;
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
          disabled={!startNumberInput}
        >
          Start
        </button>
      </div>
    );
  }
}

export default connect()(StartNumber);
