import { useState } from 'react'
import Chat, { ChatProps } from './Chat'

const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-message-2"
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
    <path d="M8 9h8"></path>
    <path d="M8 13h6"></path>
    <path d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z"></path>
  </svg>
)

const example: Partial<ChatProps> = {
  userId: 'system',
  title: 'Lokendo',
  messages: [
    {
      id: '1',
      content: 'hello',
      fromId: '1',
    },
    {
      id: '2',
      content: 'hello',
      fromId: 'system',
    },
  ],
  icon: icon,
}

export default function App() {
  const [value, setValue] = useState('')
  const onSend = () => {
    alert('Test')
  }
  const payload = {
    ...example,
    value,
    onChange: setValue,
    onSend,
  } as ChatProps
  return <Chat {...payload} />
}
