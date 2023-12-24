import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Exercises } from '../state/Workout'

const WorkoutPage = () => {
  const [workouts, setWorkouts] = useState({
    militaryPress: { weight: '', reps: '' },
    benchPress: { weight: '', reps: '' },
    shoulderRaise: { weight: '', reps: '' },
    pullUp: { weight: '', reps: '' },
    squat: { weight: '', reps: '' },
    kettlebell: { weight: '', reps: '' },
  });

  const handleChange = (name, key, value) => {
    setWorkouts(prev => ({
      ...prev,
      [name]: { ...prev[name], [key]: value },
    }));
  };

  const renderWorkoutInput = (id, name) => (
    <View id={id} style={styles.workoutContainer}>
      <Text style={styles.workoutName}>{name}</Text>
      <TextInput
        style={styles.input}
        // onChangeText={(text) => handleChange(name.toLowerCase().replace(/ /g, ''), 'weight', text)}
        // value={workouts[name.toLowerCase().replace(/ /g, '')].weight}
        placeholder="Weight"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        // onChangeText={(text) => handleChange(name.toLowerCase().replace(/ /g, ''), 'reps', text)}
        // value={workouts[name.toLowerCase().replace(/ /g, '')].reps}
        placeholder="Reps"
        keyboardType="numeric"
      />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {Exercises.map((workout) => {
        console.log('Id: ', workout.id, ", Name: ", workout.name);
        return renderWorkoutInput(workout.id, workout.name);
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  workoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  workoutName: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    width: 100,
    marginHorizontal: 5,
  },
});

export default WorkoutPage;