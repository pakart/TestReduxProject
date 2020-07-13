/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/no-string-refs */
/* eslint-disable consistent-return */
const React = require('react');
const LeftSideBar = require('./sidebars/leftsidebar.jsx');
const RightSideBar = require('./sidebars/rightsidebar.jsx');

function getJsonObject(url) {
  return new Promise((succeed, fail) => {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.addEventListener('load', () => {
      if (request.status < 400) succeed(request.response);
      else fail(new Error(`Request failed: ${request.statusText}`));
    });
    request.addEventListener('error', () => {
      fail(new Error('Network error'));
    });
    request.send();
  });
}

class PhoneForm extends React.Component {
  onClick() {
    getJsonObject('http://jsonplaceholder.typicode.com/posts').then((response) => JSON.parse(response)).then((data) => {
      this.refs.phoneInput.value = '';
      data.forEach((element) => {
        this.props.addPhone(element.body);
      });
    });
    /* if (this.refs.phoneInput.value !== '') {
      const itemText = this.refs.phoneInput.value;
      this.refs.phoneInput.value = '';
      return this.props.addPhone(itemText);
    } */
  }

  render() {
    return <div>
              <input ref="phoneInput" />
              <button onClick = {this.onClick.bind(this)}>Отправить GET</button>
          </div>;
  }
}

class PhoneItem extends React.Component {
  constructor(props) {
    super(props);
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
