const React = require('react');
const postJsonObject = require('../network.jsx');

class AddRecordForm extends React.Component {
  onClick() {
    if (this.newRecordInput.value !== '') {
      const newRecordObject = {
        body: this.newRecordInput.value,
      };

      const newRecordJsonObject = JSON.stringify(newRecordObject);

      postJsonObject('http://jsonplaceholder.typicode.com/posts', newRecordJsonObject).then(() => {
        this.props.addRecord(this.newRecordInput.value);
        this.newRecordInput.value = '';
      });
    }
  }

  render() {
    return <div>
                <input ref={(newRecordInput) => { this.newRecordInput = newRecordInput; }}/>
                <button onClick = {this.onClick.bind(this)}>Добавление записи</button>
            </div>;
  }
}

module.exports = AddRecordForm;
