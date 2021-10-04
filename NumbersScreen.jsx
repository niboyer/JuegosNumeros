import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function NumbersScreen({listNumbers}) {
    return(
        <View>
            {listNumbers.map(n => <Text>{n}</Text>)}
        </View>
    );
}