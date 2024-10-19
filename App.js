import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import TransactionsScreen from './screens/TransactionsScreen';
import BudgetsScreen from './screens/BudgetsScreen';
import SavingsGoalsScreen from './screens/SavingsGoalsScreen';
import QueryScreen from './screens/QueryScreen';
import InsightsScreen from './screens/InsightsScreen';
import SplashScreen from './screens/SplashScreen';  // Import SplashScreen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Transactions" component={TransactionsScreen} />
        <Stack.Screen name="Budgets" component={BudgetsScreen} />
        <Stack.Screen name="SavingsGoals" component={SavingsGoalsScreen} />
        <Stack.Screen name="Query" component={QueryScreen} />
        <Stack.Screen name="Insights" component={InsightsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
