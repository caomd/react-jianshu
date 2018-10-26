import React, {  } from 'react';
import { List, Input, Button } from 'antd';

//无状态组件
const TodoListUI = ((props) => {
  return (
    <div>
      <div style={{marginLeft: '10px',marginTop: '10px'}}>
        <Input placeholder="todolist" style={{width: '300px',marginRight: '10px'}}
               value={props.inputVal}
               onChange={props.handleInputChange}/>
        <Button type="primary" onClick={props.handleSubmit}>提交</Button>
        <List
          style={{marginTop: '10px',width: '300px'}}
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (<List.Item onClick={() => {props.handleDeleteItem(index)}}>{item}</List.Item>)}
        />
      </div>
    </div>
  )
})
// class TodoListUI extends Component {
//
//   render() {
//     return (
//       <div>
//         <div style={{marginLeft: '10px',marginTop: '10px'}}>
//           <Input placeholder="todolist" style={{width: '300px',marginRight: '10px'}}
//                  value={this.props.inputVal}
//                  onChange={this.props.handleInputChange}/>
//           <Button type="primary" onClick={this.props.handleSubmit}>提交</Button>
//           <List
//             style={{marginTop: '10px',width: '300px'}}
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item, index) => (<List.Item onClick={() => {this.props.handleDeleteItem(index)}}>{item}</List.Item>)}
//           />
//         </div>
//       </div>
//     )
//   }
// }
export default TodoListUI;