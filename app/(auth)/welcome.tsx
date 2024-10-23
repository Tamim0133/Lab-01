import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter, useGlobalSearchParams } from 'expo-router';

const welcome = () => {
    const { username } = useGlobalSearchParams();

    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Hello {username}!</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  });

export default welcome