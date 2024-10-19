import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Button, Alert } from 'react-native';
import TransactionCard from '../components/TransactionCard';
import { getTransactions } from '../services/TransactionService';

const TransactionsScreen = () => {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  // Fetch transactions from the service
  useEffect(() => {
    const fetchTransactions = async () => {
      const data = await getTransactions();
      setTransactions(data);
    };
    fetchTransactions();
  }, []);

  // Handle adding new transactions dynamically
  const handleAddTransaction = () => {
    if (!description || !amount) {
      Alert.alert('Error', 'Please enter both description and amount.');
      return;
    }

    const newTransaction = {
      id: transactions.length + 1,
      description,
      amount: parseFloat(amount),
      date: new Date().toISOString(),
    };

    setTransactions([newTransaction, ...transactions]);
    setDescription('');
    setAmount('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions</Text>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TransactionCard transaction={item} />}
        contentContainerStyle={styles.list}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          style={styles.input}
          placeholder="Amount"
          value={amount}
          keyboardType="numeric"
          onChangeText={setAmount}
        />
        <Button title="Add Transaction" onPress={handleAddTransaction} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200ea',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  inputContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    fontSize: 16,
  },
});

export default TransactionsScreen;
