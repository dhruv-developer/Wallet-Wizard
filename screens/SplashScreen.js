import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Navigate to Home screen after 2 seconds
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 2000);  // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer);  // Cleanup timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wallet Wizard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',  // Use the same color scheme as the rest of your app
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6200ea',  // Branding color used in your app
  },
});

export default SplashScreen;
