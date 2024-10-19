import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, ScrollView, ActivityIndicator } from 'react-native';
import { main } from '../services/LLAMAService';  // Import the main function

const QueryScreen = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleQuery = async () => {
    if (!query) {
      Alert.alert('Error', 'Please enter a question.');
      return;
    }

    setLoading(true);
    try {
      const result = await main(query);  // Call the main function with user input
      setResponse(result);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch response.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ask LLAMA a Question</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your financial question here..."
        value={query}
        onChangeText={setQuery}
        multiline
        numberOfLines={4}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#6200ea" />
      ) : (
        <Button title="Ask" onPress={handleQuery} style={styles.button} />
      )}
      {response && (
        <View style={styles.responseContainer}>
          <Text style={styles.responseTitle}>Response:</Text>
          <Text style={styles.response}>{response}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200ea',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 20,
    minHeight: 100,
  },
  button: {
    backgroundColor: '#6200ea',
    color: '#fff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  responseContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  responseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  response: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#444',
  },
});

export default QueryScreen;
