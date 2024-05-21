import React, { useState, useContext } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../../context/AuthContext";

export default function SignIn() {

    const { signIn, loadingAuth } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handlerLogin() {

        if (email === '' || password === '') {
            return;
        }

        await signIn({ email, password })
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo.png')}
            />
            <View style={styles.inputContainer}>
                <TextInput placeholder="Digite seu Email" style={styles.input} value={email} onChangeText={setEmail} />
                <TextInput placeholder="Digite sua Senha" style={styles.input} secureTextEntry={true} value={password} onChangeText={setPassword} />
                <TouchableOpacity style={styles.button} onPress={handlerLogin}>
                    {loadingAuth ? (
                        <ActivityIndicator size={25} color="#000" />
                    ) : (
                        <Text style={styles.buttonText}>Acessar</Text>
                    )}
                </TouchableOpacity>
            </View>
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
        logo: {
            marginBottom: 20
        },
        inputContainer: {
            width: '95%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 24,
            paddingHorizontal: 14

        },
        input: {
            width: '95%',
            height: 50,
            paddingHorizontal: 8,
            backgroundColor: '#DDD723',
            borderRadius: 5,
            marginBottom: 10,
            shadowColor: '#000',
            textAlign: 'center'
        },
        button: {
            width: '95%',
            height: 50,
            backgroundColor: '#000',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',

        },
        buttonText: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#DDD723',
        }
    }
);