import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';

const HOC = (InnerCommponent) => {
  return class extends Component {
    
    state = {x : 0, y :0};

    mouseMoveHandler = (ev) =>{
      this.setState({ x: ev.clientX, y: ev.clientY})
    }

    render() {
      return (
        <div style={{ height: '100%' }} onMouseMove = {this.mouseMoveHandler}>
          Hi from HOC.
          <InnerCommponent message = "hello" coordinates = {this.state} />
        </div>
      )
    }
  }
}


class DisplayCoordinants extends Component {
  render() {
    const {x,y} = this.props.coordinates;

    return (
      <div>
       The mouse position is ({x},{y}), the message is {this.props.message} but from inner componet.
      </div>
    );
  }
}


const MyApp = HOC(DisplayCoordinants);



class App extends Component {
  render() {
    return (
        <MyApp/>
    );
  }
}

export default App;
