import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, Alert } from 'react-native';
import { getBudgets } from '../services/BudgetService';

const BudgetsScreen = () => {
  const [budgets, setBudgets] = useState([]);
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const fetchBudgets = async () => {
      const data = await getBudgets();
      setBudgets(data);
    };
    fetchBudgets();
  }, []);

  const handleAddBudget = () => {
    if (!category || !amount) {
      Alert.alert('Error', 'Please fill in both the category and amount.');
      return;
    }

    const newBudget = {
      id: budgets.length + 1,  // Unique ID for each new budget
      category,
      amount: parseFloat(amount),
    };

    setBudgets([...budgets, newBudget]);
    setCategory('');
    setAmount('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budgets</Text>
      
      <FlatList
        data={budgets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.budgetCard}>
            <Text style={styles.budgetText}>{item.category}</Text>
            <Text style={styles.budgetText}>${item.amount}</Text>
          </View>
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Category"
          value={category}
          onChangeText={setCategory}
        />
        <TextInput
          style={styles.input}
          placeholder="Amount"
          value={amount}
          keyboardType="numeric"
          onChangeText={setAmount}
        />
        <Button title="Add Budget" onPress={handleAddBudget} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#6200ea',
  },
  budgetCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  budgetText: {
    fontSize: 18,
    color: '#333',
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

export default BudgetsScreen;
