const defaultState = {
  inputVal: '123',
  list: [1,2,3]
}
export default (state = defaultState, action) => {
  // console.log(action);
  if (action.type === 'change_input_value'){
    //先拷贝一份state 深层拷贝
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputVal = action.value;
    //必须返回
    return newState;
  }
  if (action.type === 'change_todo_item'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputVal);
    newState.inputVal = '';
    return newState;
  }
  if (action.type === 'delete_todo_item') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.value, 1);
    return newState;
  }
  return state;
}