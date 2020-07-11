/* eslint-disable class-methods-use-this */
const React = require('react');

class LeftSideBar extends React.Component {
  render() {
    return <aside className = 'leftAside'>
            <h2> here is a left side bar </h2>
        </aside>;
  }
}
module.exports = LeftSideBar;
