/* eslint-disable class-methods-use-this */
const React = require('react');

class NavBarListItem extends React.Component {
  openList() {
    this.props.switchContent('list');
  }

  render() {
    return <div className='nav-item' onClick={this.openList.bind(this)}>
      Список
      </div>;
  }
}

class NavBarTicTacToeItem extends React.Component {
  openCoffee() {
    this.props.switchContent('tic_tac_toe');
  }

  render() {
    return <div className='nav-item' onClick={this.openCoffee.bind(this)}>
      Крестики нолики
      </div>;
  }
}

class HorizontalNavView extends React.Component {
  render() {
    return <nav>
            <NavBarListItem {...this.props}/>
      <NavBarTicTacToeItem {...this.props}/>
        </nav>;
  }
}
module.exports = HorizontalNavView;
