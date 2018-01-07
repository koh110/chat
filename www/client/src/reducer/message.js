import ws from 'lib/socket'

const MESSAGE_INIT_STATE = {
  input: '',
  messages: []
}

const INPUT = 'message/input'
const INPUT_CLEAR = 'message/inputClear'
const ADD_MESSAGE = 'message/add'

export function messageReducer(state=MESSAGE_INIT_STATE, action = {}) {
  switch (action.type) {
    case INPUT:
      return { ...state, input: action.input }
    case INPUT_CLEAR:
      return { ...state, input: '' }
    case ADD_MESSAGE: {
      const messages = [ ...state.messages, action.message ]
      return { ...state, messages }
    }
  }

  return state
}

export function inputTxt(txt) {
  return { type: INPUT, input: txt }
}

export function sendTxt() {
  return (dispatch, getState, client) => {
    const input = getState().message.input
    ws.send(input)
    dispatch({ type: INPUT_CLEAR })
  }
}

export function addMessage(message) {
  return { type: ADD_MESSAGE, message }
}
