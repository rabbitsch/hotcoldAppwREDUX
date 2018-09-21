import React, { Component } from 'react';
import Input from './components/input';
import Content from './components/displayCont';
import './App.css';



export default class App extends Component {
  constructor(){
    super()
    this.state = {
      guesses: [],
      numberGuessed: '',
      correctAnswer: Math.floor(Math.random() * 100) + 1,
      feedback: 'lets play?'
    };

  }



    //
    // guessCounter = () =>{
    //   count++;
    // }

     //  generateNumber = (guess) =>{
	   //     const secretNumber = Math.floor(Math.random()*100)+1;
     //     console.log(secretNumber)
     //     console.log(guess)
     //     if(secretNumber === guess){
     //       postiveFeedback();
     //     }
     //    else
     //      return negativeFeedback();
     // }

     feedbackForUser = () =>{

    }

    postiveFeedback = () =>{

    }

    setGuess = (guess) => {
      console.log(this.state)
      this.setState(state => ({ ...state, guesses: [...state.guesses, guess] }))
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hot or Cold</h1>
        </header>
          <div>
            <Input onSubmit={this.setGuess}  />

          </div>
        <div className="App-intro">
            <Content guesses={this.state.guesses} />
        </div>
      </div>
    );
  }
}
