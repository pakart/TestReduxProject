/* eslint-disable no-param-reassign */
// eslint-disable-next-line func-names
const { Map } = require('immutable');

const reducer = function (state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return state.merge(action.state);
    case 'ADD_RECORD':
      return state.update('records', (records) => records.push(action.record));
    case 'DELETE_RECORD':
      return state.update('records',
        (records) => records.filterNot(
          (item) => item === action.record,
        ));
    case 'EDIT_RECORD':
      state.update('records', (records) => records.push(action.record));
      return state.update('records',
        (records) => records.filterNot(
          (item) => item === action.record,
        ));
    case 'SWITCH_CONTENT':
      return state.update('content', (content) => { content = action.content; return content; });
    default:
      return state;
  }
};
module.exports = reducer;
