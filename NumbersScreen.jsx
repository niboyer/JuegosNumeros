import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView } from 'react-native';

export default function NumbersScreen({listNumbers}) {

    return(
        <View  style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {listNumbers.map(n =>                 
                    <View style={styles.numeros}>
                        <Text>Su numero: </Text>
                        <Text style={styles.num}>{n.numero} - </Text>
                        <Text>Resultado: </Text>
                        <Text style={styles.num}> {n.bien}</Text>
                        <Text style={styles.bien}> B</Text>
                        <Text style={styles.num}> {n.regular}</Text>
                        <Text style={styles.regular}> R</Text>
                        <Text style={styles.num}> {n.mal}</Text>
                        <Text style={styles.mal}> M</Text>
                    </View>
                )}
            </ScrollView>
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
    scrollView: {
        backgroundColor: 'lightgrey',
        marginHorizontal: 20,
        borderRadius: 10,
        padding: 5,
        marginTop:15,
        marginBottom:15,
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
        borderColor: 'green',
        marginBottom: 5,
        padding: 5,
        borderRadius: 10,
        backgroundColor: 'white'
      },
    input:{
      borderWidth: 1,
      borderColor: '#777',
      padding: 8,
      margin: 10,
      width: 200,
    },
  });