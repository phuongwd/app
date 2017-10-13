import React from "react"
import { Text, TouchableHighlight } from "react-native"
import { types, chatActions } from "hedvig-redux"
import { connect } from "react-redux"
import {
  showDashboardAction
} from "../../actions/baseNavigation"

const FloatingChatButtonComponent = ({
  dispatch,
  bottom = 20,
  right = 20,
  zIndex = 100
}) => {
  return (
    <TouchableHighlight
      style={{
        position: "absolute",
        bottom,
        right,
        zIndex
      }}
      onPress={() => dispatch(chatActions.apiAndNavigateToChat({
        method: "POST",
        url: "/chat/main",
        body: null,
        SUCCESS: "INITIATED_CHAT_MAIN"
      }))}
    >
      <Text>Chat</Text>
    </TouchableHighlight>
  )
}

const FloatingChatButton = connect()(FloatingChatButtonComponent)

const FloatingHomeButtonComponent = ({
  dispatch,
  bottom = 20,
  right = 20,
  zIndex = 100
}) => {
  return (
    <TouchableHighlight
      style={{
        position: "absolute",
        bottom,
        right,
        zIndex
      }}
      onPress={() => dispatch(showDashboardAction())}
    >
      <Text>Dashboard</Text>
    </TouchableHighlight>
  )
}

const FloatingHomeButton = connect()(FloatingHomeButtonComponent)

export { FloatingHomeButton, FloatingChatButton }
