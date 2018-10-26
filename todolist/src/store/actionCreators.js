import {CHANGE_INPUT_VALUE, CHANGE_TODO_ITEM, DELETE_TODO_ITEM,INIT_TODO_LIDT,INIR_LIST_ITEM} from "./actionTypes";
// import axios from 'axios';
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
});
// redux-thunk
// const getTodoList = () => {
//   return (dispatch) => {
//     axios.get('/api/list').then((res) => {
//      // console.log(res.data);
//       const data = res.data;
//       const action = {
//         type: INIT_TODO_LIDT,
//         data
//       }
//       dispatch(action);
//     }).catch((error) => console.log(error));
//   }
// }
const getInitList = (data) => ({
  type: INIR_LIST_ITEM,
  data
})
export {getAddItemAction, getDeleteItemAction, getInputChangeAction,getInitToDoList,getInitList};