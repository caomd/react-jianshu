import { CHANGE_INPUT_VALUE, CHANGE_TODO_ITEM, DELETE_TODO_ITEM,INIT_TODO_LIDT } from './actionTypes'
const defaultState = {
  inputVal: '',
  list: []
}
export default (state = defaultState, action) => {
  // console.log(action);
  if (action.type === CHANGE_INPUT_VALUE){
    //先拷贝一份state 深层拷贝
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputVal = action.value;
    //必须返回
    return newState;
  }
  if (action.type === CHANGE_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputVal);
    newState.inputVal = '';
    return newState;
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  if (action.type === INIT_TODO_LIDT) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  return state;
}