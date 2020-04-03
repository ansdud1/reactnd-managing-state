import React, { Component } from 'react';


class Game extends Component{
 
  constructor(props){
    super(props);
    const values = this.resetValues(); 
    
    this.state = {
      value1: values[0], 
      value2: values[1], 
      value3: values[2], 
      proposedAnswer: values[3]
    };
  }
  
  resetValues = () => {
    const value1 = Math.floor(Math.random() * 100);
	const value2 = Math.floor(Math.random() * 100);
	const value3 = Math.floor(Math.random() * 100);
	const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3; 
    return [value1, value2, value3, proposedAnswer];
  }

handleAnswer = event => {
 const isAnswer = this.evaluateAnswer(event.target.name);
  const values = this.resetValues();
  this.updateState(values);
  this.props.updateAnswer(isAnswer); 
};

evaluateAnswer = givenAnswer => {
  const  { value1, value2, value3, proposedAnswer } = this.state;
  const corrAnswer = value1 + value2 + value3;
  
  return (
    	(corrAnswer === proposedAnswer && givenAnswer === 'true') ||
      (corrAnswer !== proposedAnswer && givenAnswer === 'false')
    );
};

updateState = values => {
 this.setState(currentState => ({
  value1:values[0], 
  value2:values[1],
  value3:values[2],
  proposedAnswer:values[3]
 }));
};
               
  
 render(){
	const { value1, value2, value3, proposedAnswer } = this.state;
    return (
		<div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={this.handleAnswer} name = "true">True</button>
          <button onClick={this.handleAnswer} name = "false">False</button>
        </div> 	  
);
 }
}


export default Game;