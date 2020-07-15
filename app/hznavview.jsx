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

class NavBarCoffeeItem extends React.Component {
  openCoffee() {
    this.props.switchContent('coffee');
  }

  render() {
    return <div className='nav-item' onClick={this.openCoffee.bind(this)}>
      Кофеварка
      </div>;
  }
}

class HorizontalNavView extends React.Component {
  render() {
    return <nav>
            <NavBarListItem {...this.props}/>
      <NavBarCoffeeItem {...this.props}/>
        </nav>;
  }
}
module.exports = HorizontalNavView;
