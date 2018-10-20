import React, { Component,Fragment } from 'react'
import './style.css'
import TodoItem from './TodoItem'
class TodoList extends Component{
  constructor(props){
      super(props);
      this.state = {
          inputVal: '',
          list: []
      }
  }
  handleInputChange(e){
    const value = e.target.value;
    this.setState(() => ({
      inputVal: value
    }));
  }
  handleSubmit(){
    this.setState((preState) => ({
      list: [...preState.list, preState.inputVal],
      inputVal: ''
    }));
  }
  hanldeDeleteItem(index){
    // const list = [...this.state.list];
    // list.splice(index, 1);
    // this.setState({
    //     list: list
    // })
    this.setState((preState) => {
      const list = [...preState.list];
      list.splice(index, 1);
      return {list}
    });
  }
  getTodoItem() {
    return (
      this.state.list.map((item, index) => {
        return (
            <TodoItem key={index} content={item} index={index} deleteItem={this.hanldeDeleteItem.bind(this)}/>
        )
      })
    )
  }
    render () {
        return(
            <Fragment>
                <div>
                    <label htmlFor="inputVal">输入内容</label>
                    <input id="inputVal" className="input" value={this.state.inputVal} onChange={this.handleInputChange.bind(this)}/>
                    <button onClick={this.handleSubmit.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                       this.getTodoItem()
                    }
                </ul>
            </Fragment>
        );
    }
}
export default TodoList;