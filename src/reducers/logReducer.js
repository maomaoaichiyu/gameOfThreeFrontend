let index = -1;
export default (state = [], action) => {
  switch (action.type) {
    case 'SHOW_START_MESSAGE':
      index += 1;
      return state.concat([{ id: index, message: 'You start the game. Please send the first number' }]);
    case 'SHOW_RECEIVED_NUMBER':
      index += 1;
      return state.concat([{ id: index, message: `You received ${action.receivedNumber}` }]);
    case 'SHOW_OWN_MOVE':
      index += 1;
      return state.concat([{ id: index, message: `You added ${action.step}, sent ${action.resultNumber} to the other.` }]);
    default:
      return state;
  }
};
