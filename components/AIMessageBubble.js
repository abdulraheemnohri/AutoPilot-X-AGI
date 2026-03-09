import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AIMessageBubble = ({ text, isAI }) => {
  return (
    <View style={[styles.wrapper, isAI ? styles.aiWrapper : styles.userWrapper]}>
      {isAI && <View style={styles.avatar}><Text style={styles.avatarText}>AI</Text></View>}
      <View style={[styles.bubble, isAI ? styles.aiBubble : styles.userBubble]}>
        <Text style={[styles.text, isAI ? styles.aiText : styles.userText]}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'row', marginBottom: 15, maxWidth: '85%' },
  aiWrapper: { alignSelf: 'flex-start' },
  userWrapper: { alignSelf: 'flex-end' },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    marginTop: 5
  },
  avatarText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },
  bubble: {
    padding: 15,
    borderRadius: 20,
  },
  aiBubble: {
    backgroundColor: '#F0F2F5',
    borderTopLeftRadius: 4,
  },
  userBubble: {
    backgroundColor: '#2196F3',
    borderTopRightRadius: 4,
  },
  text: { fontSize: 15, lineHeight: 22 },
  aiText: { color: '#1C1E21' },
  userText: { color: '#fff' }
});

export default AIMessageBubble;
