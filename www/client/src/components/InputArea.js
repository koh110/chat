import React from 'react'
import { connect } from 'react-redux'
import { inputTxt, sendTxt } from 'reducer/message'

class InputArea extends React.Component {
  constructor(props) {
    super(props)
    this.inputHandler = this.inputHandler.bind(this)
    this.sendHandler = this.sendHandler.bind(this)
  }

  inputHandler(e) {
    const { inputTxt } = this.props
    inputTxt(e.target.value)
  }

  sendHandler() {
    this.props.sendTxt()
  }

  render() {
    const { value } = this.props

    return (
      <div>
        <input type="text" onChange={this.inputHandler} value={value} />
        <button onClick={this.sendHandler}>send</button>
      </div>
    )
  }
}

export default connect(
  state => ({
    value: state.message.input
  }),
  { inputTxt, sendTxt }
)(InputArea)
