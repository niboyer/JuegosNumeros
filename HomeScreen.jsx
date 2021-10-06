import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Switch, Button } from 'react-native';


export default function HomeScreen({ navigation }) {
    const [nombre, setNombre] = useState('Extraño');
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const handleStart = () => {
        var numeroOculto = Math.floor(1000 + Math.random() * 9000);

        if(isEnabled){
            numeroOculto = Math.floor(1000 + Math.random() * 9000);
        } else{
            numeroOculto = getRndInteger(1000,9999);
        }

        console.log(numeroOculto)

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
          color='#79B36B'
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
      backgroundColor:'#79B36B',
      textAlign: 'center',
      color: 'white'
    },
    text:{
        fontSize: 34,
        marginBottom: 50,
        color: '#53B839'
    },
  });

  function getRndInteger(min, max) {
    let valor = Math.floor(Math.random() * (max - min + 1) ) + min;
    const a = valor.toString();
    if(a[0]==a[1]||a[0]==a[2]||a[0]==a[3]||a[1]==a[2]||a[1]==a[3]||a[2]==a[3]){
      let salir = 0;
      while (salir == 0 ){
        valor = Math.floor(Math.random() * (max - min + 1) ) + min;
        const a = valor.toString();
        if(a[0]!=a[1]&&a[0]!=a[2]&&a[0]!=a[3]&&a[1]!=a[2]&&a[1]!=a[3]&&a[2]!=a[3]){
          salir=1;
        }
      }
    }
    return valor.toString();
  }