const React = require('react');
const ReactDOM = require('react-dom');
const redux = require('redux');
const { Provider } = require('react-redux');
const reducer = require('./reducer.jsx');
const AppView = require('./appview.jsx');

const store = redux.createStore(reducer);

store.dispatch({
  type: 'SET_STATE',
  state: {
    pair: ['28 days later', 'Trainspotting'],
    content: 'list',
    records: [],
  },
});

ReactDOM.render(
  <Provider store={store}>
      <AppView />
  </Provider>,
  document.getElementById('container'),
);
