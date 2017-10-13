import React from "react"
import { Text, View, Image } from "react-native"
import { BaseScrolleViewStyle, ChatMessageStyle } from "../Styles"

const SelectMessage = ({ message, textAlign }) => {
  return (
    <View>
      {message.body.choices.filter(c => c.selected).map(c =>
        <Text key={c.text} style={{ textAlign }}>
          {c.text}
        </Text>
      )}
    </View>
  )
}

const HeroMessage = ({ message, textAlign }) => {
  return (
    <View>
      <Text style={{ textAlign }}>
        {message.body.text}
      </Text>
      <Image
        source={{ uri: message.body.imageUri }}
        style={{ height: 150, width: 300 }}
      />
    </View>
  )
}

const DefaultMessage = ({ message, textAlign }) => {
  return (
    <Text style={{ textAlign }}>
      {message.body.text}
    </Text>
  )
}

const UserMessageMapping = {
  single_select: SelectMessage,
  multiple_select: SelectMessage
}

const HedvigMessageMapping = {
  hero: HeroMessage
}

const renderMessage = function(message, idx) {
  let fromMe = message.header.fromId !== 1
  let flexDirection = fromMe ? "row-reverse" : "row"
  let alignSelf = fromMe ? "flex-end" : "flex-start"
  let textAlign = fromMe ? "right" : "left"

  let MessageRenderComponent = DefaultMessage
  if (fromMe && UserMessageMapping.hasOwnProperty(message.body.type)) {
    MessageRenderComponent = UserMessageMapping[message.body.type]
  } else if (
    !fromMe &&
    HedvigMessageMapping.hasOwnProperty(message.body.type)
  ) {
    MessageRenderComponent = HedvigMessageMapping[message.body.type]
  }
  return (
    <View key={message.globalId || idx}>
      <ChatMessageStyle
        style={{
          flexDirection: flexDirection,
          alignSelf: alignSelf
        }}
      >
        <MessageRenderComponent message={message} textAlign={textAlign} />
      </ChatMessageStyle>
    </View>
  )
}

const renderMessages = function(messages) {
  return messages.map(renderMessage)
}

const MessageList = ({ messages }) => {
  return (
    <BaseScrolleViewStyle
      innerRef={x => (this.ref = x)}
      onContentSizeChange={() => this.ref.scrollToEnd()}
    >
      {renderMessages(messages)}
    </BaseScrolleViewStyle>
  )
}

export default MessageList
