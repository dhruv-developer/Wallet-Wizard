import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';  // Icon library

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Personal Finance Manager</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Transactions')}>
        <FontAwesome name="list-alt" size={24} color="white" />
        <Text style={styles.buttonText}>Transactions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Budgets')}>
        <FontAwesome name="bar-chart" size={24} color="white" />
        <Text style={styles.buttonText}>Budgets</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SavingsGoals')}>
        <FontAwesome name="money" size={24} color="white" />
        <Text style={styles.buttonText}>Savings Goals</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Insights')}>
        <FontAwesome name="pie-chart" size={24} color="white" />
        <Text style={styles.buttonText}>Spending Insights</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Query')}>
        <FontAwesome name="question" size={24} color="white" />
        <Text style={styles.buttonText}>Ask LLAMA</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#6200ea',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6200ea',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    width: '90%',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default HomeScreen;
