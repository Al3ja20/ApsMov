import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

function DetailsScreen({navigation}) {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Details Screen</Text>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  export default DetailsScreen;