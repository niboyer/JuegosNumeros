import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button, ToastAndroid } from 'react-native';

import NumbersScreen from './NumbersScreen';

export default function GameScreen({ route, navigation }) {
    const { nombre } = route.params;
    const { numeroOculto } = route.params;
    const { isEnabled } = route.params;

    const [listNumbers, setListNumbers] = useState([]);
    const [numero, setNumero] = useState(0);

    const [mayor10, setMayor10] = useState(false);

    const handleNumber = () => {
        if(numero.toString().length === 4 && listNumbers.length < 10)
        {
            let nuevoNumero = {
                numero: numero,
                bien: 0,
                regular: 0,
                mal: 0
            }   

            if(isEnabled==true){
                nuevoNumero = comprobarRep(numeroOculto, nuevoNumero);
            }
            else{
                nuevoNumero = comprobar(numeroOculto, nuevoNumero);
            }
            

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
            <Text style={{padding:5, fontSize:20}}>Bienvenido: {nombre}</Text>
            {mayor10 ? <Text style={{padding:5, fontSize:20}}>Nro. Secreto: {numeroOculto}</Text>:<Text style={{padding:5, fontSize:20}}>Nro. Secreto:</Text>}

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

  function comprobar(numeroOculto, numeroNuevo){
    
    if(numeroNuevo.numero.toString()[0] == numeroOculto.toString()[0]){
        numeroNuevo.bien = numeroNuevo.bien + 1;
    }
    else if(numeroNuevo.numero.toString()[0] == numeroOculto.toString()[1] || numeroNuevo.numero.toString()[0] == numeroOculto.toString()[2] || numeroNuevo.numero.toString()[0]==numeroOculto.toString()[3]){
        numeroNuevo.regular = numeroNuevo.regular + 1;
    }
    else{
        numeroNuevo.mal = numeroNuevo.mal + 1;
    }
    

    if(numeroNuevo.numero.toString()[1] == numeroOculto.toString()[1]){
        numeroNuevo.bien = numeroNuevo.bien + 1;
    }
    else{
        if(numeroNuevo.numero.toString()[1] == numeroOculto.toString()[0] || numeroNuevo.numero.toString()[1] == numeroOculto.toString()[2] || numeroNuevo.numero.toString()[1] == numeroOculto.toString()[3]){
            numeroNuevo.regular = numeroNuevo.regular + 1;
        }
        else{
            numeroNuevo.mal = numeroNuevo.mal + 1;
        }
    }

    if(numeroNuevo.numero.toString()[2] == numeroOculto.toString()[2]){
        numeroNuevo.bien = numeroNuevo.bien + 1;
    }
    else{
        if(numeroNuevo.numero.toString()[2] == numeroOculto.toString()[0] || numeroNuevo.numero.toString()[2] == numeroOculto.toString()[1] || numeroNuevo.numero.toString()[2] == numeroOculto.toString()[3]){
            numeroNuevo.regular = numeroNuevo.regular + 1;
        }
        else{
            numeroNuevo.mal = numeroNuevo.mal + 1;
        }
    }

    if(numeroNuevo.numero.toString()[3] == numeroOculto.toString()[3]){
        numeroNuevo.bien = numeroNuevo.bien + 1;
    }
    else{
        if(numeroNuevo.numero.toString()[3] == numeroOculto.toString()[0] || numeroNuevo.numero.toString()[3] == numeroOculto.toString()[1] || numeroNuevo.numero.toString()[3] == numeroOculto.toString()[2]){
            numeroNuevo.regular = numeroNuevo.regular + 1;
        }
        else{
            numeroNuevo.mal = numeroNuevo.mal + 1;
        }
    }

    return numeroNuevo;
  }





  function comprobarRep(numeroOculto,numeroNuevo){
    var contador = 0;

    if(numeroNuevo.numero.toString()[0]==numeroOculto.toString()[0]){
        numeroNuevo.bien = numeroNuevo.bien + 1;
    }
    else{
      if(numeroNuevo.numero.toString()[0]!=numeroOculto.toString()[1]&&numeroNuevo.numero.toString()[0]!=numeroOculto.toString()[2]&&numeroNuevo.numero.toString()[0]!=numeroOculto.toString()[3]){
        numeroNuevo.mal = numeroNuevo.mal + 1;
      }
      else{
        if(numeroNuevo.numero.toString()[1]!=numeroOculto.toString()[1]&&numeroNuevo.numero.toString()[2]!=numeroOculto.toString()[2]&&numeroNuevo.numero.toString()[3]!=numeroOculto.toString()[3]){
            numeroNuevo.regular = numeroNuevo.regular + 1;
        }
        else{
            if(numeroNuevo.numero.toString()[0]==numeroOculto.toString()[1]&&numeroNuevo.numero.toString()[1]!=numeroOculto.toString()[1]){
              contador = contador + 1;
            }
            if(numeroNuevo.numero.toString()[0]==numeroOculto.toString()[2]&&numeroNuevo.numero.toString()[2]!=numeroOculto.toString()[2]){
              contador = contador + 1;
            }
            if(numeroNuevo.numero.toString()[0]==numeroOculto.toString()[3]&&numeroNuevo.numero.toString()[3]!=numeroOculto.toString()[3]){
              contador = contador + 1;
            }
            if(contador>=1){
                numeroNuevo.regular = numeroNuevo.regular + 1;
            }
            else{
                numeroNuevo.mal = numeroNuevo.mal + 1;
            }
          } 
        }
      }
  
  
  
  
    if(numeroNuevo.numero.toString()[1]==numeroOculto.toString()[1]){
        numeroNuevo.bien = numeroNuevo.bien + 1;
    }
    else{
      if(numeroNuevo.numero.toString()[1]!=numeroOculto.toString()[0]&&numeroNuevo.numero.toString()[1]!=numeroOculto.toString()[2]&&numeroNuevo.numero.toString()[1]!=numeroOculto.toString()[3]){
        numeroNuevo.mal = numeroNuevo.mal + 1;
      }
      else{
        if(numeroNuevo.numero.toString()[0]!=numeroOculto.toString()[0]&&numeroNuevo.numero.toString()[2]!=numeroOculto.toString()[2]&&numeroNuevo.numero.toString()[3]!=numeroOculto.toString()[3]){
            numeroNuevo.regular = numeroNuevo.regular + 1;
        }
        else{
          if(numeroNuevo.numero.toString()[1]==numeroOculto.toString()[0]&&numeroNuevo.numero.toString()[0]!=numeroOculto.toString()[0]){
            contador = contador + 1;
          }
          if(numeroNuevo.numero.toString()[1]==numeroOculto.toString()[2]&&numeroNuevo.numero.toString()[2]!=numeroOculto.toString()[2]){
            contador = contador + 1;
          }
          if(numeroNuevo.numero.toString()[1]==numeroOculto.toString()[3]&&numeroNuevo.numero.toString()[3]!=numeroOculto.toString()[3]){
            contador = contador + 1;
          }
          if(contador>=1){
            numeroNuevo.regular = numeroNuevo.regular + 1;
          }
          else{
            numeroNuevo.mal = numeroNuevo.mal + 1;
          }
        } 
      }
    }
  
  
  
    if(numeroNuevo.numero.toString()[2]==numeroOculto.toString()[2]){
        numeroNuevo.bien = numeroNuevo.bien + 1;
    }
    else{
      if(numeroNuevo.numero.toString()[2]!=numeroOculto.toString()[0]&&numeroNuevo.numero.toString()[2]!=numeroOculto.toString()[1]&&numeroNuevo.numero.toString()[2]!=numeroOculto.toString()[3]){
        numeroNuevo.mal = numeroNuevo.mal + 1;
      }
      else{
        if(numeroNuevo.numero.toString()[0]!=numeroOculto.toString()[0]&&numeroNuevo.numero.toString()[1]!=numeroOculto.toString()[1]&&numeroNuevo.numero.toString()[3]!=numeroOculto.toString()[3]){
            numeroNuevo.regular = numeroNuevo.regular + 1;
        }
        else{
          if(numeroNuevo.numero.toString()[2]==numeroOculto.toString()[0]&&numeroNuevo.numero.toString()[0]!=numeroOculto.toString()[0]){
            contador = contador + 1;
          }
          if(numeroNuevo.numero.toString()[2]==numeroOculto.toString()[1]&&numeroNuevo.numero.toString()[1]!=numeroOculto.toString()[1]){
            contador = contador + 1;
          }
          if(numeroNuevo.numero.toString()[2]==numeroOculto.toString()[3]&&numeroNuevo.numero.toString()[3]!=numeroOculto.toString()[3]){
            contador = contador + 1;
          }
          if(contador>=1){
            numeroNuevo.regular = numeroNuevo.regular + 1;
          }
          else{
            numeroNuevo.mal = numeroNuevo.mal + 1;
          }
        } 
      }
    }
  
  
    if(numeroNuevo.numero.toString()[3]==numeroOculto.toString()[3]){
        numeroNuevo.bien = numeroNuevo.bien + 1;
    }
    else{
      if(numeroNuevo.numero.toString()[3]!=numeroOculto.toString()[0]&&numeroNuevo.numero.toString()[3]!=numeroOculto.toString()[1]&&numeroNuevo.numero.toString()[3]!=numeroOculto.toString()[2]){
        numeroNuevo.mal = numeroNuevo.mal + 1;
      }
      else{
        if(numeroNuevo.numero.toString()[0]!=numeroOculto.toString()[0]&&numeroNuevo.numero.toString()[1]!=numeroOculto.toString()[1]&&numeroNuevo.numero.toString()[2]!=numeroOculto.toString()[2]){
            numeroNuevo.regular = numeroNuevo.regular + 1;
        }
        else{
          if(numeroNuevo.numero.toString()[3]==numeroOculto.toString()[0]&&numeroNuevo.numero.toString()[0]!=numeroOculto.toString()[0]){
            contador = contador + 1;
          }
          if(numeroNuevo.numero.toString()[3]==numeroOculto.toString()[1]&&numeroNuevo.numero.toString()[1]!=numeroOculto.toString()[1]){
            contador = contador + 1;
          }
          if(numeroNuevo.numero.toString()[3]==numeroOculto.toString()[2]&&numeroNuevo.numero.toString()[2]!=numeroOculto.toString()[2]){
            contador = contador + 1;
          }
          if(contador>=1){
            numeroNuevo.regular = numeroNuevo.regular + 1;
          }
          else{
            numeroNuevo.mal = numeroNuevo.mal + 1;
          }
        } 
      }
    }
    return numeroNuevo;
  }