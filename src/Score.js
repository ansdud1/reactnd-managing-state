import React from 'react';

const Score = props => {
  
  const {numCorrect, numQuestions} = props;
  
 return (
  <p className="text">
BASH
×
No Open Terminals
NEW TERMINAL

            Your Score: {numCorrect}/{numQuestions}
          </p>
 );
}

export default Score; 