import React, { Component } from 'react';
import Input from './components/input';
import Content from './components/displayCont';
import './App.css';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      amtGuessesNumber: 0,
      numberGuessed: '',


    }

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

    submitHandler = (event) =>{
      event.preventDefault();
    }

//input search
    handleInputEvent = (event) =>{
      console.log('the event is happening')
      this.setState({
        [event.target.value]: event.target.value
      })
    }





  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hot or Cold</h1>
        </header>
          <div>
            <Input  />
          </div>
        <p className="App-intro">
            <Content userGuess={this.numberGuessed}/>
        </p>
      </div>
    );
  }
}
