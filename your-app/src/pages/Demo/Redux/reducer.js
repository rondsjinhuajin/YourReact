function init(initVal) {
  return {
    count: initVal,
    total: 10,
    user: {},
    article: []
  };
}
function reducer(state, action) {
  switch (action.type) {
    case actionType.insrement:
      return { count: state.count + action.payload };
    case actionType.decrement:
      return { count: state.count - action.payload };
    case actionType.reset:
      return init(action.payload);
    default:
      throw new Error();
  }
}
export { init, reducer }
