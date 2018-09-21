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

   setGuess = (guess) =>{
     console.log('guess was clicked can you hear me')

  const userGuessing = (guess) => {
    console.log(guess,'>>>>>>>>>>')
       const difference = Math.abs(guess - this.state.correctAnswer)
          console.log('>>>>>>>>>>>')
          console.log(difference)

       let feedback;
       if(difference >= 50){
         feedback: "you are ice cold"
       }
       else if(difference >= 40){
         feedback:"bra you are chilly"
       }
       else if(difference >= 30){
         feedback: "less chilly but still chillin"
       }
       else if(difference >= 20){
         feedback:"getting warm"
       }
       else if(difference >= 10){
         feedback:"getting hot"
       }
       else if(difference >= 5){
         feedback:"hot!!"
       }
       else{
         feedback: "you got it!"
       }
       this.setState({
         feedback
       })
       // this.setState(state => ({ ...state, guesses: [...state.guesses, guess] }))
     }
     this.setState(state => ({ ...state, guesses: [...state.guesses, guess] }))
   }


// User guesses
    // setGuess = (guess) => {
    //   console.log(this.state)
    //   this.setState(state => ({ ...state, guesses: [...state.guesses, guess] }))
    // }

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
            <Content guesses={this.state.guesses} feedback={this.state.feedback} />
        </div>
      </div>
    );
  }
}
