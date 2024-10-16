import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen  from './src/Screens/DetailsScreen';
import HomeScreen from './src/Screens/HomeScreens';
import Pantalla3 from './src/Screens/Pantalla3';
import Snack from './src/Screens/Snack';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Pantalla3" component={Pantalla3} />
        <Stack.Screen name="Snack" component={Snack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
