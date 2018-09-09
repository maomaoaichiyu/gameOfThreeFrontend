export default (state = { received_number: undefined, status: 'wait' }, action) => {
  switch (action.type) {
    case 'SHOW_START_MESSAGE':
      return Object.assign(state, { status: 'start' });
    case 'SHOW_RECEIVED_NUMBER':
      return Object.assign(state, { received_number: action.receivedNumber, status: 'move' });
    case 'SHOW_OWN_MOVE':
      return Object.assign(state, { status: 'wait' });
    case 'GAME_OVER':
      return Object.assign(state, { received_number: undefined, status: 'over' });
    default:
      return state;
  }
};
