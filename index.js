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

class Sub extends Component {
  render () {
    return (
      <div>
        <img src={'//unsplash.it/200/300'} />
      </div>
    )
  }
}

const root = document.querySelector('#app')

const element = (
  <div>
    <Card color={'skyblue'}>Card 1</Card>
    <Card color={'steelblue'}>Card 2</Card>
  </div>
)

const sub = document.querySelector('#sub')
ReactDom.render(element, root)
ReactDom.render(<Sub />, sub)