import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export class ReactionListLight extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  _renderReactions = reactions => {
    const reactionsByType = {};
    const {emojiData} = this.props;

    reactions.map(item => {
      if (reactions[item.type] === undefined) {
        return (reactionsByType[item.type] = [item]);
      } else {
        return (reactionsByType[item.type] = [
          ...reactionsByType[item.type],
          item,
        ]);
      }
    });

    const emojiDataByType = {};
    emojiData.forEach(e => (emojiDataByType[e.id] = e));

    const reactionTypes = emojiData.map(e => e.id);
    return Object.keys(reactionsByType).map(type =>
      reactionTypes.indexOf(type) > -1 ? (
        <Text style={styles.emoji} key={type}>
          {emojiDataByType[type].icon}
        </Text>
      ) : null,
    );
  };

  render() {
    const {
      latestReactions,
      openReactionSelector,
      getTotalReactionCount,
    } = this.props;

    const totalCount = getTotalReactionCount();
    return (
      <TouchableOpacity style={styles.container} onPress={openReactionSelector}>
        {this._renderReactions(latestReactions)}
        <Text style={styles.reactionCount}>
          {totalCount > 0 ? totalCount : null}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
  },
  emoji: {
    fontSize: 8,
  },
  reactionCount: {
    fontSize: 10,
  },
});
