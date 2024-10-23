import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const members = [
  {
    id: '1',
    name: 'Naimul Islam',
    role: 'Project Manager',
    image: 'https://via.placeholder.com/150', // Placeholder image from the internet
  },
  {
    id: '2',
    name: 'Al Habib',
    role: 'Lead Developer',
    image: 'https://via.placeholder.com/150', // Placeholder image
  },
  {
    id: '3',
    name: 'Rohul Amin',
    role: 'UI/UX Designer',
    image: 'https://via.placeholder.com/150', // Placeholder image
  },
  {
    id: '4',
    name: 'Tamim Dewan',
    role: 'Co-ordinator',
    image: 'https://via.placeholder.com/150', // Placeholder image
  },
];

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About Us</Text>
      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.memberContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.role}>{item.role}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  info: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 16,
    color: 'gray',
  },
});

export default AboutUs;
