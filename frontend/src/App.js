import React, { Component } from 'react'
import QuestionsContainer from './smart/QuestionsContainer'
import Logo from './dumb/Logo'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App flex-column">
        <div style={{flex: 3}}>
          <Logo />
        </div>
        <QuestionsContainer />
        <div style={{flex: 3}}></div>
      </div>
    )
  }
}

export default App;
