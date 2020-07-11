/* eslint-disable class-methods-use-this */
const React = require('react');

class RightSideBar extends React.Component {
  render() {
    return <aside className = 'rightAside'>
            <h2> here is a right side bar </h2>
        </aside>;
  }
}
module.exports = RightSideBar;
