import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { queryLLAMA } from '../services/LLAMAService';

const InsightsScreen = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const data = [
    {
      name: 'Groceries',
      amount: 35,
      color: 'tomato',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Bills',
      amount: 40,
      color: 'orange',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Dining',
      amount: 25,
      color: 'gold',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  const handleQuery = async () => {
    if (!query) {
      Alert.alert('Error', 'Please enter a question.');
      return;
    }

    setLoading(true);
    try {
      const result = await queryLLAMA(query);
      setResponse(result);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch response from LLAMA.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Spending Insights</Text>
      <PieChart
        data={data}
        width={Dimensions.get('window').width - 50}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        accessor="amount"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />

      <TextInput
        style={styles.input}
        placeholder="Ask LLAMA about your spending..."
        value={query}
        onChangeText={setQuery}
      />
      <Button title={loading ? 'Asking...' : 'Ask LLAMA'} onPress={handleQuery} disabled={loading} />

      {response ? (
        <Text style={styles.response}>{response}</Text>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#6200ea',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    width: '100%',
  },
  response: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default InsightsScreen;
