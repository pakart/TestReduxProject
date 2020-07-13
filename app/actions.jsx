/* eslint-disable func-names */
const addRecord = function (record) {
  return {
    type: 'ADD_RECORD',
    record,
  };
};
const deleteRecord = function (record) {
  return {
    type: 'DELETE_RECORD',
    record,
  };
};

module.exports = { addRecord, deleteRecord };
