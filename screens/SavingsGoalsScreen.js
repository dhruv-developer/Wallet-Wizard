import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, Alert } from 'react-native';
import SavingsGoalCard from '../components/SavingsGoalCard';

const SavingsGoalsScreen = () => {
  const [goals, setGoals] = useState([
    { id: '1', name: 'Vacation Fund', target: 2000, saved: 600 },
    { id: '2', name: 'Emergency Fund', target: 5000, saved: 1500 },
  ]);
  const [name, setName] = useState('');
  const [target, setTarget] = useState('');
  const [saved, setSaved] = useState('');

  const handleAddGoal = () => {
    if (!name || !target || !saved) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    const newGoal = {
      id: (goals.length + 1).toString(),
      name,
      target: parseFloat(target),
      saved: parseFloat(saved),
    };

    setGoals([...goals, newGoal]);
    setName('');
    setTarget('');
    setSaved('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Savings Goals</Text>

      <FlatList
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SavingsGoalCard goal={item} />}
        contentContainerStyle={styles.list}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Goal Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Target Amount"
          value={target}
          keyboardType="numeric"
          onChangeText={setTarget}
        />
        <TextInput
          style={styles.input}
          placeholder="Amount Saved"
          value={saved}
          keyboardType="numeric"
          onChangeText={setSaved}
        />
        <Button title="Add Goal" onPress={handleAddGoal} />
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

export default SavingsGoalsScreen;
