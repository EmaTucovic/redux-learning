import React from 'react';

 const HOC = (WarppedComponent) => {
     //acepts some component and returns other component
     return class extends React.Component {

         constructor(props) {
             super(props);
             this.state = {count :0}
             this.update = this.update.bind(this);
         }

         update(){
             console.log("update");
            this.setState( (oldState) => { 
                return {count : oldState.count + 1}
            });
         }

         componentWillMount() {
             console.log("will mount");
         }

        //we must pass this.props to inner component, it expects some props
        //children = {this.props.children}
         render(){
                return  (<WarppedComponent
                            {...this.props}
                            {...this.state}
                            update = {this.update}
                />);
         }
     }
 }

 const Button = (props) => <button onClick = {props.update}> {props.children} - {props.count} </button>

 const ButtonHOC = HOC(Button);

 export default class App extends React.Component {
     render(){
         return (
             <div> 
             <ButtonHOC> Hello </ButtonHOC>
             </div>
         )
     }
 }