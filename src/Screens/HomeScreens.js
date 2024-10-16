import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

function HomeScreen({navigation}) {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Home Screen</Text>
        <Button title="Details" onPress={() => navigation.navigate('Details')}></Button>
        <Button title="Snack" onPress={() => navigation.navigate('Snack')}></Button>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Pantalla3')}>
          <Text>Go Pantalla3</Text>
        </TouchableOpacity>
      </View>
    );
  }

  export default HomeScreen;