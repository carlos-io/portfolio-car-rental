import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main.jsx'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (<Main />);
  }
}

const app = document.querySelector('#app');
ReactDOM.render(<App />, app);