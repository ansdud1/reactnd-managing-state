import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import Score from './Score';

const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      numQuestions: 0,
      numCorrect: 0
  	}
  }
  
  updateAnswer = answer => {
    	console.log('Answer is', answer); 
    	
    	if(answer){
        	this.setState(currentState => (
              {numCorrect:currentState.numCorrect + 1}));  
        }
    
    	this.setState(currentState => (
          {numQuestions: currentState.numQuestions+ 1}));
	  };
    
  render() {
    
    console.log("NumCorrect", this.state.numCorrect);
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
    	<Game 
    		numQuestions={numQuestions} 
			numCorrect= {numCorrect}
			updateAnswer={this.updateAnswer}
		/>
       <Score numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions} />

      </div>
    );
  }
}

export default App;
