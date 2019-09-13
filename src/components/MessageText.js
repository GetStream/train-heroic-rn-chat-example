import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

/**
 *
 * Message UI component
 *
 * @example ../docs/MessageSimple.md
 * @extends Component
 */

export class MessageText extends React.PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const {message, renderText} = this.props;

    if (!message.text) {
      return null;
    }

    console.log('BLAHHHHHH');
    console.log(renderText(message));
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
    // width: '100%',
    // padding: 5,
    // paddingLeft: 10,
    // borderTopRightRadius: 13,
    // borderTopLeftRadius: 13,
    // borderBottomRightRadius: 13,
    // borderBottomLeftRadius: 13,
    // backgroundColor: '#EBEBEB',
  },
  userName: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
  },
});
