import React, {useContext, useState} from "react";
import { View, Text, Button, SafeAreaView, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {StackPramsList} from '../../routes/app.routes'

export default function Dashboard(){
    const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();

    const {signOut} = useContext(AuthContext);
    const [number, setNumber] = useState('');

    async function openOrder(){
        if(number === ''){
            return;
        }
        
        navigation.navigate('Order',{number: number, order_id: '123'});
        console.log('Este é  onumero da mesa ' + number);
        alert('Este é  onumero da mesa ' + number)

        // fazer a Requisição de abrir a mesa  bavegar para a proxima tela

    }

    return(
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>
            Novo Pedido
          </Text>
          <TextInput
            placeholder="Numero da Mesa"
            style={styles.input}
            keyboardType="numeric"
            value={number}
            onChangeText={setNumber}
          />
          <TouchableOpacity style={styles.button} onPress={openOrder}>
            <Text style={styles.buttonText}>
                Abrir Mesa
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
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