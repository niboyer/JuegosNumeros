import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function NumbersScreen({listNumbers, numeroSecreto}) {

    const bien = 0;
    const regular = 0;
    const mal = 0;

    return(
        <View  style={styles.container}>
            {listNumbers.map(n =>                 
                <View style={styles.numeros}>
                    <Text>Su numero: </Text>
                    <Text style={styles.num}>{n} - </Text>
                    <Text>Resultado: </Text>
                    <Text style={styles.num}> {bien}</Text>
                    <Text style={styles.bien}> B</Text>
                    <Text style={styles.num}> {regular}</Text>
                    <Text style={styles.regular}> R</Text>
                    <Text style={styles.num}> {mal}</Text>
                    <Text style={styles.mal}> M</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    num : {
        fontSize: 20,
    },
    bien: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 25,
    },
    regular: {
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 25,
    },
    mal: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 25,
    },
    numeros: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        marginBottom: 5,
        padding: 5,
      },
    input:{
      borderWidth: 1,
      borderColor: '#777',
      padding: 8,
      margin: 10,
      width: 200,
    },
  });