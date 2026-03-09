import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import AIMessageBubble from '../components/AIMessageBubble';

const AIChatScreen = () => {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello! I am your AutoPilot AGI Ultra. I can help you automate tasks or even learn from YouTube tutorials. What can I do for you?', isAI: true },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { id: Date.now().toString(), text: input, isAI: false };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      const aiMsg = {
        id: (Date.now() + 1).toString(),
        text: 'Task received. I am analyzing the UI patterns and planning the execution workflow using the Python runtime...',
        isAI: true
      };
      setMessages(prev => [...prev, aiMsg]);
    }, 1000);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>AGI Assistant</Text>
      </View>
      <FlatList
        data={messages}
        renderItem={({ item }) => <AIMessageBubble text={item.text} isAI={item.isAI} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.chatList}
      />
      <View style={styles.inputArea}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Describe a task..."
            placeholderTextColor="#999"
            multiline
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Text style={styles.sendIcon}>🏹</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 20, paddingTop: 40, borderBottomWidth: 1, borderBottomColor: '#F0F0F0', alignItems: 'center' },
  headerTitle: { fontSize: 18, fontWeight: '800', color: '#333' },
  chatList: { padding: 20, paddingBottom: 100 },
  inputArea: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0'
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F7FA',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignItems: 'center'
  },
  input: { flex: 1, color: '#333', fontSize: 16, maxHeight: 100, paddingVertical: 10 },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },
  sendIcon: { fontSize: 18, color: '#fff' }
});

export default AIChatScreen;
