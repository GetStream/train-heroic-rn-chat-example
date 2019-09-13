/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {MessageSimple} from 'stream-chat-react-native';
import {MessageFooter} from './MessageFooter';
import {MessageText} from './MessageText';

/**
 *
 * Message UI component
 */
export const MessageHeroic = props => (
  <MessageSimple
    {...props}
    style={{
      'message.container': 'align-items: flex-start',
      'message.content': {
        container: 'max-width: 300; width: 300; align-items: stretch;',
      },
      'message.text': 'width: 100%; border-bottom-left-radius: 16;',
      'message.gallery': {
        single: 'width: 100%',
      },
      'message.card.container': 'width: 100%',
    }}
    MessageFooter={MessageFooter}
    MessageText={MessageText}
    forceAlign="left"
    reactionsEnabled={false}
    repliesEnabled={false}
  />
);
