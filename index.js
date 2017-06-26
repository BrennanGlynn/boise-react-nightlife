import React, { Component } from 'react'
import ReactDom from 'react-dom'

const styles = {
  app: {
    paddingTop: 40,
    textAlign: 'center',
  }
}

class Card extends Component {
  render () {
    const style = {
      margin: 20,
      padding: 20,
      color: 'white',
      backgroundColor: this.props.color
    }
    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}

class Counter extends Component {
  state = {
    count: 0
  }

  componentDidMount () {
    setInterval( () => {
      this.setState({ count: this.state.count + 5 })
    }, 5000)
  }

  render () {
    const { count } = this.state
    const { color, size } = this.props

    return (
      <div style={{ color, fontSize: size }}>
        { count }
      </div>
    )
  }
}

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
        <Card color={'skyblue'}>Card 1</Card>
        <Card color={'steelblue'}>Card 2</Card>
        <Counter color={'lightblue'} size={16} />
        <Counter color={'skyblue'} size={32} />
        <Counter color={'steelblue'} size={80} />
      </div>
    )
  }
}

ReactDom.render(<App />, root)