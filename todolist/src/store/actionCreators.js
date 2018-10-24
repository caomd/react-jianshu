import {CHANGE_INPUT_VALUE, CHANGE_TODO_ITEM, DELETE_TODO_ITEM,INIT_TODO_LIDT} from "./actionTypes";

const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

const getAddItemAction = () => ({
  type: CHANGE_TODO_ITEM
});

const getDeleteItemAction = (index) => ({
  type:DELETE_TODO_ITEM,
  index
});
const getInitToDoList = (data) => ({
  type: INIT_TODO_LIDT,
  data
})
export {getAddItemAction, getDeleteItemAction, getInputChangeAction,getInitToDoList};