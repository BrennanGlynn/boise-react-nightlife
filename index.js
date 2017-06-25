import React, { Component } from 'react'
import ReactDom from 'react-dom'

const styles = {
  app: {
    paddingTop: 40,
    textAlign: 'center',
  }
}

class App extends Component {
  render () {
    return (
      <div style={styles.app}>
        Welcome to React!
      </div>
    )
  }
}

const root = document.querySelector('#app')
ReactDom.render(<App />, root)