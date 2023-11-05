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
