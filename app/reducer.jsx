const { Map } = require('immutable');

// eslint-disable-next-line func-names
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

    default:
      return state;
  }
};
module.exports = reducer;
