/*eslint-disable*/

let _isBusy = false;

function setIsBusy(isBusy) {
  _isBusy = isBusy;
}

function getIsBusy() {
  return _isBusy;
}

export default {
  setIsBusy,
  getIsBusy,
}
