import io from 'socket.io-client';
import store from '../store';

const backendUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:10050';

export const socket = io(backendUrl);

export const showStartMessage = () => ({
  type: 'SHOW_START_MESSAGE',
});

export const showReceivedNumber = receivedNumber => ({
  type: 'SHOW_RECEIVED_NUMBER',
  receivedNumber,
});

export const showOwnMove = (step, resultNumber) => ({
  type: 'SHOW_OWN_MOVE',
  step,
  resultNumber,
});

export const showFirstMove = (number) => ({
  type: 'SHOW_FIRST_MOVE',
  number
});

export const gameOver = (winner) => ({
  type: 'GAME_OVER',
  winner
});

export const disconnected = () => ({
  type: 'DISCONNECTED',
});

export const send = number => () => {
  socket.emit('number', number);
  return Promise.resolve();
};

socket.on('number', (number) => {
  store.dispatch(showReceivedNumber(number));
});

socket.on('start', () => {
  store.dispatch(showStartMessage());
});

socket.on('game-over', (message) => {
  store.dispatch(gameOver(message.win));
  socket.disconnect();
});

socket.on('disconnect', () => {
  store.dispatch(disconnected());
});
