import actionType from "./actionType";
const add = num => ({
  type: actionType.insrement,
  payload: num
});

const dec = num => ({
  type: actionType.decremeng,
  payload: num
});
const getList = (data = {
  type: actionType.GETLIST,
  payload: data
});
export { add, dec, getList };
