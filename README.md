# TrainHeroic example app


## How to run example

Use node >= 11.10.1

```
git clone git@github.com:GetStream/train-heroic-rn-chat-example.git
cd train-heroic-rn-chat-example
yarn install
react-native run-ios
```

# Screenshots

![](https://github.com/GetStream/train-heroic-rn-chat-example/blob/master/screenshots/Screen%20Shot%202019-09-13%20at%203.32.50%20PM.png)

![](https://github.com/GetStream/train-heroic-rn-chat-example/blob/master/screenshots/Screen%20Shot%202019-09-13%20at%203.34.54%20PM.png)

![](https://github.com/GetStream/train-heroic-rn-chat-example/blob/master/screenshots/Screen%20Shot%202019-09-13%20at%203.35.20%20PM.png)

# Structure

Our regular message component design is a little different than give in requirements. So it requires some UI tweaking.
But since our components are customizable style-wise, it was pretty easy to set it up.

[<Channel>](https://github.com/GetStream/train-heroic-rn-chat-example/blob/master/App.js#L88) component accepts custom UI component for message.
In this case, I have created a new component which uses our regular [MessageSimple](https://getstream.github.io/stream-chat-react-native/#messagesimple) component.

MessageSimple component accepts `MessageText` prop UI component, to display text of the message. Using this prop, it was possible to provide the [UI component](https://github.com/GetStream/train-heroic-rn-chat-example/blob/master/src/components/MessageText.js) which displays  name of the user along with text of message. By default MessageSimple component will only display text.

[`renderText(message)`](https://github.com/GetStream/train-heroic-rn-chat-example/blob/master/src/components/MessageText.js#L21) method which is available to `MessageText` component takes care of parsing the text for mentions and urls, and converts them to links.

`MessageSimple` component also accepts `MessageFooter` as prop UI component, which as the name suggests is the footer for the message. Using this footer, I have added all the like, reply button and also the reaction list. [`ReactionPickerWraper`](https://github.com/GetStream/train-heroic-rn-chat-example/blob/master/src/components/MessageFooter.js#L32) component is an HOC which takes care of opening eraction picker at top of the component around which it is placed. You can adjust its position using the prop `offset` as shown [here](https://github.com/GetStream/train-heroic-rn-chat-example/blob/master/src/components/MessageFooter.js#L48)

ReactionPickerWrapper also accepts [style](https://github.com/GetStream/train-heroic-rn-chat-example/blob/master/src/components/MessageFooter.js#L33) prop which are internally forwarded to ReactionPicker to override its style. Documentation for ReactionPicker in details is pending, but we will update it soon. For now, you can check the source code for [ReactionPicker](https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/ReactionPicker.js) component, to override more styles. ALso check the tutorial for options to override styles - https://getstream.io/chat/react-native-chat/tutorial/#custom-styles
