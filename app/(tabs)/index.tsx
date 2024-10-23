import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { router } from 'expo-router';

const Stack = createNativeStackNavigator();


type RootStackParamList = {
  Landing: undefined; // No parameters for Landing screen
  Home: undefined;    // No parameters for Home screen
};

// Define props interface for LandingScreen
interface LandingScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Landing'>; // Use StackNavigationProp for stack navigators
}

const LandingScreen: React.FC<LandingScreenProps> = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
      navigation.replace('Home'); // Navigate to HomeScreen after loading
    }, 3000);

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, [navigation]); // Add navigation to dependencies array

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Once loading is complete, HomeScreen will be displayed
  return null;
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Button title="Log In" onPress={() => router.push('../(auth)/login')} />
      <View style={styles.gap} />
      <Button title="Sign Up" onPress={() => alert('Sign Up Pressed')} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gap: {
    height: 20,
  },
});

// Create the stack navigator in the main app
const App = () => {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default App;
