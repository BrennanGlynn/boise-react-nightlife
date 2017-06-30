import React, { Component } from 'react'
import ReactDom from 'react-dom'

const root = document.querySelector('#app')

class App extends Component {
  render () {
    const style = {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
    return (
      <div>
        hello world
      </div>
    )
  }
}

ReactDom.render(<App />, root)