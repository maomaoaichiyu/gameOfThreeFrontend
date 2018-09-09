/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './components.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class GameConsole extends Component {
  render() {
    const { logs } = this.props;
    return (
      <div className="GameConsole">
        <div className="LogTitle">Game log</div>
        {
            logs.map(log => (
              <div key={log.id}>{log.message}</div>
            ), this)
          }
      </div>
    );
  }
}

GameConsole.propTypes = {
  logs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

const mapStateToProps = state => ({
  logs: state.logReducer,
});

export default connect(mapStateToProps)(GameConsole);
