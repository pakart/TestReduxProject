/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/no-string-refs */
/* eslint-disable consistent-return */
const React = require('react');
const LeftSideBar = require('./sidebars/leftsidebar.jsx');
const RightSideBar = require('./sidebars/rightsidebar.jsx');

class PhoneForm extends React.Component {
  onClick() {
    if (this.refs.phoneInput.value !== '') {
      const itemText = this.refs.phoneInput.value;
      this.refs.phoneInput.value = '';
      return this.props.addPhone(itemText);
    }
  }

  render() {
    return <div>
              <input ref="phoneInput" />
              <button onClick = {this.onClick.bind(this)}>Добавить</button>
          </div>;
  }
}

class PhoneItem extends React.Component {
  constructor(props) {
    super(props);
    console.log('item', this.props);
  }

  render() {
    return <div>
                  <p>Hi, gain!</p>
                  <p>
                    <b>{this.props.text}</b><br />
                    <button onClick={() => this.props.deletePhone(this.props.text)}>Удалить</button>
                  </p>
              </div>;
  }
}

class PhonesList extends React.Component {
  constructor(props) {
    super(props);
    console.log('list', this.props);
  }

  render() {
    return <div>
          {this.props.phones.map((item) => <PhoneItem key={item}
            text={item}
            deletePhone={this.props.deletePhone} />)}
        </div>;
  }
}

class MainView extends React.Component {
  constructor(props) {
    super(props);
    console.log('wtf', this.props);
  }

  render() {
    return <main>
            <article>
                <PhoneForm addPhone={this.props.addPhone}/>
                <PhonesList {...this.props} />
            </article>
            <LeftSideBar />
            <RightSideBar />
      </main>;
  }
}

module.exports = MainView;
