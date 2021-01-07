import React, { Component } from 'react';
import './App.css';
class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      quote: ""
    }
  }

  getQuote = () => {
    console.log("It works")
    this.setState({
      quote: "It works"
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
