/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/no-string-refs */
/* eslint-disable consistent-return */
const React = require('react');
const LeftSideBar = require('./sidebars/leftsidebar.jsx');
const RightSideBar = require('./sidebars/rightsidebar.jsx');
const getJsonObject = require('./network.jsx');
const AddRecordForm = require('./records_components/add_record.jsx');

class RecordsForm extends React.Component {
  onClick() {
    getJsonObject('http://jsonplaceholder.typicode.com/posts').then((response) => JSON.parse(response)).then((data) => {
      data.forEach((element) => {
        this.props.addRecord(element.body);
      });
    });
  }

  render() {
    return <div>
              <button onClick = {this.onClick.bind(this)}>Запрос записей</button>
          </div>;
  }
}

class RecordItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
              <p>
              <b>{this.props.text}</b><br />
              <button onClick={() => this.props.deleteRecord(this.props.text)}>Удалить</button>
              </p>
            </div>;
  }
}

class RecordsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
          {this.props.records.map((item) => <RecordItem key={item}
            text={item}
            deleteRecord={this.props.deleteRecord} />)}
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
                <RecordsForm addRecord={this.props.addRecord} />
                <AddRecordForm addRecord={this.props.addRecord}/>
                <RecordsList {...this.props} />
            </article>
            <LeftSideBar />
            <RightSideBar />
      </main>;
  }
}

module.exports = MainView;
