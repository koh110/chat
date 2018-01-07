import React from 'react'
import { connect } from 'react-redux'
import { addMessage } from 'reducer/message'
import ws from 'lib/socket'

class Socket extends React.Component {
  constructor(props) {
    super(props)

    const { addMessage } = this.props

    ws.onmessage = (e) => {
      addMessage(e.data)
    }
  }

  render() { return null }
}

export default connect(
  state => ({ }),
  { addMessage }
)(Socket)
