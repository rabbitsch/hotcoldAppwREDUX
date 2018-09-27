
import {SET_GUESSES} from './actions';



const initialState = {
  guesses: [],
  numberGuessed: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  feedback: 'lets play?'

}

export const guesserReducer = (state = initialState,action) =>{
  console.log(action,'this is the reducer talking')
  // let guess;
  // guess = parseInt(action.guess)
  // console.log(guess, 'my guess in reducer')


  if(action.type === SET_GUESSES){
    let feedback, guess;
    guess = parseInt(action.guess)
    const difference = Math.abs(guess - state.correctAnswer);
     Object.assign({}, state,{
        guesses: [...state.guesses, guess],
        feedback

    })
    // console.log(guess, 'this is my guess in the reducer')
    // const difference = Math.abs(guess - state.correctAnswer);
        if(difference >= 50){
          feedback = "you are ice cold";
        }
        else if(difference >= 40){
          feedback ="bra you are chilly";
        }
        else if(difference >= 30){
          feedback = "less chilly but still chillin";
        }
        else if(difference >= 20){
          feedback = "getting warm";
        }
        else if(difference >= 10){
          feedback = "getting hot";
        }
        else if(difference >= 1){
          feedback = "hot!!";
        }
        else
          feedback = "you got it!";


    return Object.assign({}, state,{
      feedback,
      guesses: [...state.guesses, guess]
    });
  }
    return state;

  }
