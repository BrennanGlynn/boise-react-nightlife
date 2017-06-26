import React, { Component } from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components'

const randomColor = () => '#' + Math.random().toString(16).substr(-6)

const Lard = styled.div`
  padding: 20px;
  text-align: center;
  color: white;
  background-color: ${props => props.color};
`

const Container = styled.div`
  padding: 20px;
`

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
    count: 1,
    color: 'skyblue'
  }

  randomizeColor = () => this.setState({ color: randomColor() })

  componentDidMount () {
    setInterval( () => {
      this.setState({ count: this.state.count + 5 })
    }, 5000)
  }

  render () {
    const { count, color } = this.state

    return (
    <Container>
      <Lard color={color}>
        <input type={'button'} value={'Randomize Color'} onClick={this.randomizeColor} />
      </Lard>
    </Container>
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
        <Counter/>
      </div>
    )
  }
}

ReactDom.render(<App />, root)