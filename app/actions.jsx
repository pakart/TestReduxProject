/* eslint-disable func-names */
const addRecord = (record) => ({
  type: 'ADD_RECORD',
  record,
});

const deleteRecord = (record) => ({
  type: 'DELETE_RECORD',
  record,
});

const editRecord = (record) => ({
  type: 'EDIT_RECORD',
  record,
});

const switchContent = (content) => ({
  type: 'SWITCH_CONTENT',
  content,
});

module.exports = {
  addRecord, editRecord, deleteRecord, switchContent,
};
