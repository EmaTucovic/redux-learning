import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';

class Mouse extends Component {
    
    state = {x : 0, y :0};

    mouseMoveHandler = (ev) =>{
      this.setState({ x: ev.clientX, y: ev.clientY})
    }

    render() {
      return (
        <div style={{ height: '100%' }} onMouseMove = {this.mouseMoveHandler}>
          {this.props.children(this.state)}
        </div>
      )
    }
  }



class DisplayCoordinants extends Component {
  render() {

    return (
      <Mouse>
        {mouseState => (
          <div style = {{height:'100%'}}>
            The mouse position is ({mouseState.x},{mouseState.y}), the message is {this.props.message}.
          </div>
        )}
      </Mouse>
    );
  }
}


class App extends Component {
  render() {
    return (
        <DisplayCoordinants message = "hello"/>
    );
  }
}

export default App;
