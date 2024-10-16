import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

function Pantalla3Screen({navigation}) {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Pantalla3</Text>
        <TouchableOpacity 
          onPress={() => navigation.popToTop()}>
          <Text>Pop To Top</Text>
        </TouchableOpacity>
      </View>
    );
  }

  export default Pantalla3Screen;