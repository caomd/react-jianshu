import React, {Component, Fragment} from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'
class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      show: true
    };
    this.handleClick = this.handleClick.bind(this)
  }
  render () {
    return (
      <Fragment>
        <CSSTransition
        in={this.state.show}
        timeout={2000}
        classNames='fade'
        unmountOnExit
        onEnterde={(el) => {el.style.color = 'blue'}}
        appear={true}
        >
        <div>Hello World</div>
        </CSSTransition>
        <button onClick={this.handleClick}>toggle</button>
      </Fragment>
    )
  }
  handleClick(){
    this.setState({
      show: !this.state.show
    })
  }
}
export default App;