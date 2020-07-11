/* eslint-disable class-methods-use-this */
const React = require('react');
// const { connect } = require('react-redux');

class HeadView extends React.Component {
  render() {
    return <header>
            <h1>Hello, redux!</h1>
        </header>;
  }
}

module.exports = HeadView;
