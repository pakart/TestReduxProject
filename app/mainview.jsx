/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/no-string-refs */
/* eslint-disable consistent-return */
const React = require('react');
const LeftSideBar = require('./sidebars/leftsidebar.jsx');
const RightSideBar = require('./sidebars/rightsidebar.jsx');
const getJsonObject = require('./network.jsx');
const AddRecordForm = require('./records_components/add_record.jsx');
const TicTacToeComponent = require('./tic_tac_toe_component.jsx');

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

  onClick() {
    this.recordArea.readOnly = false;
    this.recordArea.focus();
    this.saveButton.className = 'save-button-visible';
    // this.props.editRecord(this.props.text);
  }

  saveButtonAction() {
    this.saveButton.className = 'save-button-invisible';
    this.props.deleteRecord(this.props.text);
    this.props.text = this.recordArea.value;
    this.props.addRecord(this.recordArea.value);
  }

  onBlur() {
    // this.recordArea.readOnly = true;
    // this.recordArea.value = this.props.text;

    // this.saveButton.className = 'save-button-invisible';
  }

  render() {
    return <div>
              <p>
              <textarea ref={(recordArea) => { this.recordArea = recordArea; }}
                readOnly defaultValue={this.props.text}
                onBlur={this.onBlur.bind(this)}></textarea><br />
              <button onClick={() => this.props.deleteRecord(this.props.text)}>
                Удалить запись</button>
              <button onClick={this.onClick.bind(this)}>Редактировать запись</button>
              <button className='save-button-invisible'
                ref={(saveButton) => { this.saveButton = saveButton; }}
                onClick={this.saveButtonAction.bind(this)}>Сохранить</button>
              </p>
            </div>;
  }
  // () => this.props.editRecord(this.props.text)
}

class RecordsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      {this.props.records.map((item) => <RecordItem key={item}
        text={item}
        deleteRecord={this.props.deleteRecord}
        editRecord={this.props.editRecord}
        addRecord={this.props.addRecord}/>)}
        </div>;
  }
}
class ListComponent extends React.Component {
  render() {
    return <article>
      <RecordsForm addRecord={this.props.addRecord} />
      <AddRecordForm addRecord={this.props.addRecord} />
      <RecordsList {...this.props} />
    </article>;
  }
}

class MainView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.content === 'tic_tac_toe') {
      return <main>
        <TicTacToeComponent {...this.props} />
        <LeftSideBar />
        <RightSideBar />
      </main>;
    }
    return <main>
        <ListComponent {...this.props} />
        <LeftSideBar />
        <RightSideBar />
      </main>;
  }
}

module.exports = MainView;
