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

module.exports = { addRecord, editRecord, deleteRecord };
