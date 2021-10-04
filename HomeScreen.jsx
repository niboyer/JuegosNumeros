import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Switch, Button } from 'react-native';


export default function HomeScreen({ navigation }) {
    const [nombre, setNombre] = useState('extraño');
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const handleStart = () => {

        var numeroOculto = 0;
        if(isEnabled){
            numeroOculto = Math.floor(1000 + Math.random() * 9000);
        }

        navigation.navigate('GameScreen', {
            nombre: nombre,
            numeroOculto: numeroOculto,
          });
    }


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.text}>Juego de los números</Text>
        <TextInput
            style={styles.input}            
            placeholder="Ingrese su nombre"
            onChangeText={nombre => setNombre(nombre)}
        />
        <Text>¿Repetición de numeros?</Text>
        <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
        <Button 
        title="COMENZAR"
        onPress={handleStart}
      />
      </View>
    );
    
  }

  const width_proportion = '80%';

  const styles = StyleSheet.create({
    input: {
      width:width_proportion,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      marginBottom: 50,
    },
    text:{
        fontSize: 34,
        marginBottom: 50,
    },
  });