import { CHANGE_INPUT_VALUE, CHANGE_LIST_ITEM, DELETE_LIST_ITEM } from './actionTypes';
const defaultValue = {
  inputVal: '',
  list: []
}
export default (state = defaultValue, action) => {
  if(action.type === CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputVal = action.value;
    return newState;
  }
  if(action.type === CHANGE_LIST_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(state.inputVal);
    newState.inputVal = '';
    return newState;
  }
  if(action.type === DELETE_LIST_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.value, 1);
    return newState;
  }
  return state;
}