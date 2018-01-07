import React from 'react'
import { connect } from 'react-redux'

class MessageArea extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { messages } = this.props

    return (
      <ul>
        { messages.map((e, i) => (<li key={i}>{e}</li>)) }
      </ul>
    )
  }
}

export default connect(
  state => ({
    messages: state.message.messages
  }),
  {  }
)(MessageArea)
