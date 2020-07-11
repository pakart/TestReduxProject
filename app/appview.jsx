/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/no-string-refs */
/* eslint-disable consistent-return */
const React = require('react');
const { connect } = require('react-redux');
const actions = require('./actions.jsx');
const HeadView = require('./headview.jsx');
const HorizotalNavView = require('./hznavview.jsx');
const Footer = require('./footer.jsx');
const MainView = require('./mainview.jsx');

class AppView extends React.Component {
  render() {
    return <div className ='appview'>
      <HeadView />
      <HorizotalNavView />
      <MainView {...this.props} />
      <Footer />
    </div>;
  }
}

function mapStateToProps(state) {
  return {
    phones: state.get('phones'),
  };
}

module.exports = connect(mapStateToProps, actions)(AppView);
