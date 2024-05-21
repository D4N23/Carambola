import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Order(){
    return(
        <View style={styles.container}>
            <Text>
                Tela de Pedido
            </Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fee400',
            alignItems: 'center',
            justifyContent: 'center',
        },
        title:{
            fontSize:40,
            fontWeight: 'bold',
            marginBottom:30
        },
        input: {
            width: '95%',
            height: 50,
            paddingHorizontal: 8,
            backgroundColor: '#DDD723',
            borderRadius: 5,
            marginBottom: 10,
            textAlign: 'center',
            fontSize:25
        },
        button: {
            width: '95%',
            height: 40,
            backgroundColor: '#000',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical:12

        },
        buttonText: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#DDD723',
        }
    });