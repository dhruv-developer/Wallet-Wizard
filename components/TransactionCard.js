import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionCard = ({ transaction }) => {
  console.log(transaction); // Log the transaction to check its value
  
  if (!transaction) {
    return <Text>Error: Transaction data missing</Text>;
  }

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.description}>{transaction.description}</Text>
        <Text style={styles.amount}>${transaction.amount.toFixed(2)}</Text>
      </View>
      <Text style={styles.date}>{new Date(transaction.date).toLocaleDateString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
});

export default TransactionCard;
