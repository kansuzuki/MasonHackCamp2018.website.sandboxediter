import React from 'react';
import "./button.css"

export class Button extends React.Component{
  clicked(){
    alert("hello friends!")
  }
  render(){
    return(
    <div>
      <button onClick={this.clicked} >Click Me!</button>
    </div>
    );
  }
}