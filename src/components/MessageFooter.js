import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

import {ReactionPickerWrapper} from 'stream-chat-react-native';
import {ReactionListLight} from './ReactionListLight';

export class MessageFooter extends React.PureComponent {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.messageContainer = null;
    this.state = {
      reactionPickerVisible: false,
    };
  }

  render() {
    const {
      handleReaction,
      message,
      getTotalReactionCount,
      isMyMessage,
      emojiData,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <ReactionPickerWrapper
            style={{
              'message.reactionPicker': {
                container:
                  'shadow-color: #000; shadow-opacity: 0.1; shadow-offset: 0px 3px;',
                containerView:
                  'background-color: white; padding-left: 10px; height: 25; padding-right: 10px;',
                emoji:
                  'font-size: 10; margin-bottom: 0; margin-top: 0; padding-left: 6; padding-right: 6',
                column: 'margin-top: 4',
              },
            }}
            handleReaction={handleReaction}
            hideReactionOwners={true}
            message={message}
            isMyMessage={isMyMessage}
            offset={{
              top: 40,
              left: 30,
            }}
            emojiData={emojiData}>
            <Text style={styles.buttonText}>Like</Text>
          </ReactionPickerWrapper>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Reply</Text>
          </TouchableOpacity>
          <Text style={styles.buttonText}>1 hour</Text>
        </View>

        {message.latest_reactions && message.latest_reactions.length > 0 && (
          <View style={styles.rightContainer}>
            <ReactionListLight
              visible={true}
              latestReactions={message.latest_reactions}
              openReactionSelector={this.openReactionSelector}
              getTotalReactionCount={getTotalReactionCount}
              reactionCounts={message.reaction_counts}
              emojiData={emojiData}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 5,
  },
  leftContainer: {
    width: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightContainer: {},
  button: {},
  buttonText: {
    fontSize: 10,
    color: 'grey',
  },
});
