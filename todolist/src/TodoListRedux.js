import React, { Component } from 'react';
import store from './storeRedux/index';
import { getChangeListInputVal, getChangeList, getDeleteListItem } from './storeRedux/actionCreators'
import { connect } from 'react-redux';

const TodoListRedux = (props) => {
  const { inputVal, changeInputVal, submit, deleteItem,list} = props;
  return (
          <div>
        <div>
          <input value={inputVal} onChange={changeInputVal}/>
          <button onClick={submit}>提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return (
                <li key={index} onClick={() => {deleteItem(index)}}>{item}</li>
              )
            })
          }
        </ul>
      </div>
  )
}
// class TodoListRedux extends Component{
//   constructor(props) {
//     super(props)
//     this.state = store.getState();
//   }
//   render() {
//     const { inputVal, changeInputVal, submit, deleteItem,list} = this.props;
//     return(
//       <div>
//         <div>
//           <input value={inputVal} onChange={changeInputVal}/>
//           <button onClick={submit}>提交</button>
//         </div>
//         <ul>
//           {
//             list.map((item, index) => {
//               return (
//                 <li key={index} onClick={() => {deleteItem(index)}}>{item}</li>
//               )
//             })
//           }
//         </ul>
//       </div>
//     )
//   }
// }
const mapStateToprops = (state) => {
  return{
    inputVal: state.inputVal,
    list: state.list
  }
};
const mapDispatchToprops = (dispatch) => {
  return {
    changeInputVal(e){
      const action = getChangeListInputVal(e.target.value);
      dispatch(action);
    },
    submit(){
      const action = getChangeList();
      dispatch(action);
    },
    deleteItem(index) {
      const action = getDeleteListItem(index);
      dispatch(action);
    }
  }
};
export default connect(mapStateToprops, mapDispatchToprops)(TodoListRedux);