import React from 'react'
import Socket from './Socket'
import InputArea from './InputArea'
import MessageArea from './MessageArea'

const App = (props) => (
  <div>
    <InputArea></InputArea>
    <MessageArea></MessageArea>
    <Socket></Socket>
  </div>
)

export default App
