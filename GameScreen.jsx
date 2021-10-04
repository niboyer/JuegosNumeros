import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button, ToastAndroid } from 'react-native';

import NumbersScreen from './NumbersScreen';

export default function GameScreen({ route, navigation }) {
    const { nombre } = route.params;
    const { numeroOculto } = route.params;

    const [listNumbers, setListNumbers] = useState([]);
    const [numero, setNumero] = useState(0);
    
    const handleNumber = (event) => {
        if(numero.toString().length === 4 && listNumbers.length < 10)
        {
            setListNumbers(listNumbers.concat(numero))
        }
        else if (numero.toString().length != 4)
        {
            ToastAndroid.show('Debe ingresar un numero de 4 digitos', ToastAndroid.SHORT);
        }
        else 
        {
            ToastAndroid.show('No puede ingresar mas numeros! PERDIO', ToastAndroid.LONG);
        }
    }

    return (

        <View style={{flex: 1, justifyContent: 'center'}}>
            <Text>Bienvenido: {nombre}</Text>
            <Text>Nro. Secreto: {numeroOculto}</Text>
        
            <NumbersScreen  listNumbers={listNumbers} />

            <View style={styles.row}>
                <TextInput
                    style={styles.input}            
                    placeholder="Ingrese su numero"
                    onChangeText={numero => setNumero(numero)}
                />
                <Button 
                    title="SEND"
                    onPress={handleNumber}
                />
            </View>
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
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      },
  });