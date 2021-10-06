import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button, ToastAndroid } from 'react-native';

import NumbersScreen from './NumbersScreen';

export default function GameScreen({ route, navigation }) {
    const { nombre } = route.params;
    const { numeroOculto } = route.params;

    const [listNumbers, setListNumbers] = useState([]);
    const [numero, setNumero] = useState(0);

    const [mayor10, setMayor10] = useState(false);

    const handleNumber = (event) => {
        if(numero.toString().length === 4 && listNumbers.length < 10)
        {
            let nuevoNumero = {
                numero: numero,
                bien: 0,
                regular: 0,
                mal: 0
            }   

            nuevoNumero.bien = getBien(nuevoNumero.numero, numeroOculto)
            nuevoNumero.regular = getRegular(nuevoNumero.numero, numeroOculto)

            setListNumbers(listNumbers.concat(nuevoNumero))
            
            if(numero==numeroOculto){
                setMayor10(!mayor10);
                ToastAndroid.show('GANO!', ToastAndroid.LONG);
            }
        }
        else if (numero.toString().length != 4)
        {
            ToastAndroid.show('Debe ingresar un numero de 4 digitos', ToastAndroid.SHORT);
        }
        else 
        {
            ToastAndroid.show('No puede ingresar mas numeros! PERDIO', ToastAndroid.LONG);
            setMayor10(!mayor10);
        }
    }

    return (

        <View style={{flex: 1, justifyContent: 'center'}}>
            <Text>Bienvenido: {nombre}</Text>
            {mayor10 ? <Text>Nro. Secreto: {numeroOculto}</Text>:<Text>Nro. Secreto:</Text>}

            <NumbersScreen  listNumbers={listNumbers} />

            <View style={styles.row}>
                <TextInput
                    style={styles.input}            
                    placeholder="Ingrese su numero"
                    onChangeText={numero => setNumero(numero)}
                />
                <Button 
                    title="INGRESAR"
                    onPress={handleNumber}
                    disabled={mayor10}
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

  function getBien(numero, numeroOculto){
      let bien = 0;
     for(let i=0; i<4; i++){
         if(numero.toString()[i] === numeroOculto.toString()[i]){
             bien = bien + 1;
         }
     }
     return bien;
  };

  function getRegular(numero, numeroOculto){
    let regular = 0;
    for(let i=0; i<4; i++){
        for(let j=0; j<4; j++){
            if(numero.toString()[i] === numeroOculto.toString()[j] && i != j){
                regular = regular + 1;
            }
        }
    }
    return regular;
};