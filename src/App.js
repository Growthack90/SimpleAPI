import React, { Component } from 'react';
import './App.css';
class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      quote: ""
    }
  }

  getQuote = async () => {
    console.log("It works")
    const body = await fetch("https://complimentr.com/api").then(r => r.json())
    console.log(body.compliment)
    this.setState({
      quote: body.compliment
    })
  }

  render() {
    const {quote} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <button onClick= {() => this.getQuote()}>Start!</button>
          <div>{quote}</div>
        </header>
      </div>
    );
  }
}

export default App;
