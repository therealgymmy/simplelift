import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

const FancyTitle = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Simple Lift</Text>
    </SafeAreaView>
  );
};

const HomePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FancyTitle />

      <TouchableOpacity
        style={[styles.button, styles.startWorkoutButton]}
        onPress={() => {
          console.log('Start Workout Pressed');
          navigation.navigate('Workout');
        }}
      >
        <Text style={styles.buttonText}>Start Workout</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.historyButton]}
        onPress={() => {
          console.log('History Pressed');
          navigation.navigate('History');
        }}
      >
        <Text style={styles.buttonText}>History</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', // Dark background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#F5F5F5',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    letterSpacing: 2, // Spacing between letters
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  startWorkoutButton: {
    backgroundColor: '#4CAF50', // Green button
  },
  historyButton: {
    backgroundColor: '#1E88E5', // Blue button
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  }
});

export default HomePage;
