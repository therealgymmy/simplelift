/*
 * TODO
 * [x] create Workout and History pages
 * [ ] link workout page to an exercise data module
 * [ ] save button to save exercise history
 * [ ] use history page to render past exercises
*/

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './screen/HomePage'
import WorkoutPage from './screen/WorkoutPage'
import HistoryPage from './screen/HistoryPage'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1a1a1a', // Dark background color
          },
          headerTintColor: '#fff', // White text color
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Workout" component={WorkoutPage} />
        <Stack.Screen name="History" component={HistoryPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
