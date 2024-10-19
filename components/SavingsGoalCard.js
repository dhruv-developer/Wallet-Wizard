import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SavingsGoalCard = ({ goal }) => {
  const progress = (goal.saved / goal.target) * 100;

  return (
    <View style={styles.card}>
      <Text style={styles.goalName}>{goal.name}</Text>
      <Text style={styles.goalAmount}>Saved: ${goal.saved} / ${goal.target}</Text>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>
      <Text style={styles.progressText}>{progress.toFixed(2)}% of target saved</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  goalName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  goalAmount: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#6200ea',
    borderRadius: 5,
  },
  progressText: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});

export default SavingsGoalCard;
