import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store/index';
import {getInputChangeAction,getDeleteItemAction,getAddItemAction,getInitToDoList} from "./store/actionCreators";
import TodoListUI from "./store/TodoListUI";
import axios from 'axios';
// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ];
class TodoListTwo extends Component{
  constructor(props) {
    super(props)
    // console.log(store.getState());
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render () {
    return (
      <TodoListUI
        inputVal={this.state.inputVal}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        handleDeleteItem={this.handleDeleteItem}/>
    )
  }
  componentDidMount(){
    axios.get('/api/list').then((res) => {
      const action = getInitToDoList(res.data);
      store.dispatch(action);
    }).catch((error) => console.log(error));
  }
  handleInputChange(e){
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }
  handleStoreChange(){
     //  console.log('store changed');
    this.setState(store.getState());
  }
  handleSubmit() {
    const action = getAddItemAction();
    store.dispatch(action);
  }
  handleDeleteItem(index){
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }

}
export default TodoListTwo;