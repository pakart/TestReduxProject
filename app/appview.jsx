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
  updateData(value) {
    this.setState({ content: value });
  }

  render() {
    return <div className ='appview'>
      <HeadView />
      <HorizotalNavView {...this.props}/>
      <MainView {...this.props} />
      <Footer />
    </div>;
  }
}

function mapStateToProps(state) {
  return {
    records: state.get('records'),
    content: state.get('content'),
  };
}

module.exports = connect(mapStateToProps, actions)(AppView);
