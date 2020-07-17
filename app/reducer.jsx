/* eslint-disable no-param-reassign */
// eslint-disable-next-line func-names
const { Map } = require('immutable');

const reducer = (state = Map(), action) => {
  switch (action.type) {
    case 'SET_STATE':
      return state.merge(action.state);
    case 'ADD_RECORD':
      if (state.get('records').find((x) => x === action.record) !== undefined) {
        return state;
      }
      return state.update('records', (records) => records.push(action.record));
    case 'DELETE_RECORD':
      return state.update('records',
        (records) => records.filterNot(
          (item) => item === action.record,
        ));
    case 'EDIT_RECORD':
      // state.update('records', (records) => records.push(action.record));
      return state.update('records',
        (records) => records.findIndex(
          (item) => item === action.record,
        ).set(action.record));
    case 'SWITCH_CONTENT':
      return state.update('content', (content) => { content = action.content; return content; });
    default:
      return state;
  }
};
module.exports = reducer;
