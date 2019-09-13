import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export class MessageText extends React.PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const {message, renderText} = this.props;

    if (!message.text) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text style={{...styles.userName, ...styles.text}}>
          {message.user.name}
        </Text>
        {renderText(message)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  userName: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
  },
});
