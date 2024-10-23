import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';

const ContactUs = () => {
  
  // Function to open mail client
  const handleEmailPress = () => {
    Linking.openURL('mailto:tamimdewan2003@gmail.com?subject=Inquiry')
      .catch((err) => Alert.alert('Error', 'Could not open email client'));
  };

  // Function to open phone dialer
  const handlePhonePress = () => {
    Linking.openURL('tel:0192008974')
      .catch((err) => Alert.alert('Error', 'Could not open phone dialer'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Us</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <TouchableOpacity onPress={handleEmailPress}>
          <Text style={styles.link}>tamimdewan2003@gmail.com</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Phone:</Text>
        <TouchableOpacity onPress={handlePhonePress}>
          <Text style={styles.link}>0192008974</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  infoContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginRight: 10,
  },
  link: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default ContactUs;
