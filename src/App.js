import React, { Component } from 'react';
import './App.css';
import GenerateQuote from './GenerateQuote';
import DisplayQuote from './DisplayQuote';



const axios=require('axios')

const sampleQuote = {
  "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
   "character": "Nelson Muntz",
   "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
   "characterDirection" : "Left"
}

class App extends Component {
  constructor(){
    super()
    this.state ={
      quote:sampleQuote
    }
  }
  getQuote(){
    axios.get("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then(reponse => {
      this.setState({
        quote:reponse.data[0]
      })
    })
  }
  render() {
    return (
      <div className="App">
        < GenerateQuote selectQuote={()=> this.getQuote()}    />
        <DisplayQuote quote={this.state.quote}   />
      </div>
    );
  }
}

export default App;
