const { Map } = require('immutable');

// eslint-disable-next-line func-names
const reducer = function (state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return state.merge(action.state);
    case 'ADD_PHONE':
      return state.update('phones', (phones) => phones.push(action.phone));
    case 'DELETE_PHONE':
      return state.update('phones',
        (phones) => phones.filterNot(
          (item) => item === action.phone,
        ));
    default:
      return state;
  }
};
module.exports = reducer;
