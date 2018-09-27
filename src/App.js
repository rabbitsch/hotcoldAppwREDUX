import React from 'react';
import {connect} from 'react-redux';
// import { Component } from 'react';
// import store from './store';
import Input from './components/input';
import Content from './components/displayCont';
import './App.css';



export class App extends React.Component {

   render(){

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hot or Cold App</h1>
          <p> Type in a number!</p>
        </header>
          <div>
            <Input />

          </div>
        <div className="App-intro">
            <Content  />
        </div>
      </div>
    );
  }

}

App.defaultProps =({
  guesses: [],
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  feedback: 'lets play?'
})

const mapDispatchToProps = dispatch =>{

}

const mapStateToProps = state => ({
  guesses: state.guesses,
  correctAnswer: state.correctAnswer,
  feedback: state.feedback

})

export default connect(mapStateToProps)(App);
