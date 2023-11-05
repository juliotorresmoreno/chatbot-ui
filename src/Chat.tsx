import classNames from 'classnames'
import React, { useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

export interface ChatProps {
  title: string
  icon: React.ReactElement
  userId: string
  messages: Message[]
  onChange: (value: string) => void
  value: string
  onSend: () => void
}

export interface Message {
  id: string
  content: string
  fromId: string
}

const Chat: React.FC<ChatProps> = (props) => {
  const { icon, messages, title, userId, onChange, value, onSend } = props
  const [isOpen, setIsOpen] = useState(false)
  const chatboxRef = useRef(null)

  function toggleChatbox() {
    setIsOpen(!isOpen)
    if (chatboxRef.current === null) return

    const ref: HTMLDivElement = chatboxRef.current
    window.requestAnimationFrame(() => {
      ref.scrollTop = ref.scrollHeight
    })
  }

  const defaultStyle = {
    transition: `opacity 300ms ease-in-out`,
    opacity: 0,
  }
  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  }

  const sendEvent = () => {
    if (value !== '') onSend()
  }

  return (
    <div id="chat-component">
      <div className="button-container">
        <button onClick={() => toggleChatbox()} id="open-chat">
          {icon}
          &nbsp; Chat
        </button>
      </div>
      <CSSTransition timeout={200} in={isOpen} classNames="show" unmountOnExit>
        {(state) => {
          const styles =
            state !== 'unmounted'
              ? {
                  ...defaultStyle,
                  ...transitionStyles[state],
                }
              : {}
          return (
            <div id="chat-container" style={styles}>
              <div className=".chat-body">
                <div className="chat-title">
                  <p className="chat-ptitle">{title}</p>
                  <button
                    className="close-chat"
                    onClick={() => toggleChatbox()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-robot"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
                      <path d="M12 2v2"></path>
                      <path d="M9 12v9"></path>
                      <path d="M15 12v9"></path>
                      <path d="M5 16l4 -2"></path>
                      <path d="M15 14l4 2"></path>
                      <path d="M9 18h6"></path>
                      <path d="M10 8v.01"></path>
                      <path d="M14 8v.01"></path>
                    </svg>
                  </button>
                </div>
                <div
                  ref={chatboxRef}
                  id="chatbox"
                  className="p-4 h-80 overflow-y-auto"
                >
                  {messages.map(({ id, fromId, content }) => {
                    const containerClass = classNames({
                      'user-chat': fromId === userId,
                      'friend-chat': fromId !== userId,
                    })

                    return (
                      <div key={'message-' + id} className={containerClass}>
                        <p>{content}</p>
                      </div>
                    )
                  })}
                </div>
                <div className="input-container">
                  <input
                    id="user-input"
                    type="text"
                    value={value}
                    autoComplete="off"
                    onKeyUp={(evt) => evt.key === 'Enter' && sendEvent()}
                    onChange={(evt) => onChange(evt.target.value)}
                    placeholder="Type a message"
                    className="text-input"
                  />
                  <button
                    id="send-button"
                    disabled={!value}
                    onClick={(evt) => {
                      evt.preventDefault()
                      sendEvent()
                    }}
                    className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-send"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M10 14l11 -11"></path>
                      <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )
        }}
      </CSSTransition>
    </div>
  )
}

export default Chat
