import react from 'react';
import {useState} from 'react';
import {Text,View, Image, TextInput, Button, StyleSheet} from 'react-native';

/*export default function App(){
  const [number, setNumber] = useState(0);

  return(
    <View style ={styles.container}>
    <Text style={styles.number}>{number}</Text>
    <Button
      title = "Change State"
      onPress = {() =>{setNumber(number +1)}}
      ></Button>
    </View>
  )
}*/


function Snack({navigation}){
    const [number, setNumber] = useState(0);
  return (
    <View
    style = {
      {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'purple',
      
    }}>
    <Text
    style = {{
      color: 'white',
      fontSize: 20
    }}
    >Hello, I am {getFullName('Gengar', 'Miguel', 'Hidalgo')}</Text>
    <TextInput
    style = {{
      margin: 10,
      height: 30,
      borderColor: 'white',
      color: 'white',
      borderWidth: 1,
      textAlign: 'center',
      width: '50%',
    }}
    defaultValue = 'Hii'
    />
    <Image 
    source = {{
      uri: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/092.png'
    }}
    style ={{
      width: 185,
      height: 200,
      marginTop:10
    }}
    >
    </Image>
    <Text style={styles.number}>{number}</Text>
    <Button
      title = "Change State"
      onPress = {() =>{setNumber(number +1)}}
      ></Button>
    <Button title="Home" onPress={() => navigation.navigate('Home')}></Button>
    </View>
    
  )
}




const styles = StyleSheet.create({
  number:{
    fontSize: 20,
    color: "#228B22",
    fontWeight: "bold"
  }
})

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + ' ' + secondName + ' ' + thirdName;
};

const Cat = props => {
  return (
    <View>
      <Text>Hello, Iam {props.name}!</Text>
    </View>
  )
};

const Cafe = () => {
  return (
    <View>
      <Cat name = 'Maru-Can'/>
      <Cat name = 'WAWA'/>
      <Cat name = 'Cati'/>
    </View>
  )
};


export default Snack;