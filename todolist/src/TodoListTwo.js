import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';
import store from './store/index';
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
    store.subscribe(this.handleStoreChange);
  }
  render () {
    return (
      <div>
        <div style={{marginLeft: '10px',marginTop: '10px'}}>
          <Input placeholder="todolist" style={{width: '300px',marginRight: '10px'}} value={this.state.inputVal} onChange={this.handleInputChange}/>
          <Button type="primary" onClick={this.handleSubmit}>提交</Button>
          <List
            style={{marginTop: '10px',width: '300px'}}
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (<List.Item onClick={this.handleDeleteItem.bind(this, index)}>{item}</List.Item>)}
          />

        </div>
      </div>
    )
  }
  handleInputChange(e){
    const action = {
      type: 'change_input_value',
      value: e.target.value
    };
    store.dispatch(action);
  }
  handleStoreChange(){
     //  console.log('store changed');
    this.setState(store.getState());
  }
  handleSubmit() {
    const action = {
      type: 'change_todo_item'
    }
    store.dispatch(action);
  }
  handleDeleteItem(index){
    const action = {
      type: 'delete_todo_item',
      value: index
    }
    store.dispatch(action);
  }

}
export default TodoListTwo;