import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from '../components/Svg';
import usuarioService from '../services/UsuarioService';

export default function Register() {

    const navigation = useNavigation();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('Teste')
    const [password, setPassword] = useState('Teste')
    const [confirmPassword, setConfirmPassword] = useState('Teste')

    const getName = (text) => {
        setName(text);
    };

    const getEmail = (text) => {
        setEmail(text);
    };

    const getPassword = (text) => {
        setPassword(text);
    };

    getConfirmPassword = (text) => {
        setConfirmPassword(text)
    }

    function createAnAccoung() {

        if (password === confirmPassword) {
            let data = {
                user_full_name: name,
                user_email: email,
                user_password: password,
            }

            usuarioService.cadastrar(data)

            console.log('Sucesso ao criar a conta')
        } else {
            console.log('Erro ao criar sua conta')
        }
    }

    return (
        <View className="w-full h-auto flex items-start justify-center">
            <View className="w-screen overflow-y-auto">
                <View className="w-full h-1/4 flex items-center justify-center">
                    <Icon iconName='LOGO' />
                </View>
                <View className="flex items-center w-full mb-2">
                    <Text className='w-5/6 mb-2 text-green-near-dark text-lg'>Nome completo:</Text>
                    <View
                        className="flex flex-row items-center justify-center bg-white h-16 rounded-2xl w-5/6"
                        style={[styles.boxShadown, styles.androidShadow]}
                    >
                        <TextInput
                            placeholder={name}
                            value={name}
                            onChangeText={getName}
                            className="flex items-start justify-start text-lg w-5/6 pl-8"
                        />
                    </View>
                </View>
                <View className="flex items-center w-full mb-2">
                    <Text className='w-5/6 mb-2 text-green-near-dark text-lg'>Email:</Text>
                    <View
                        className="flex flex-row items-center justify-center bg-white h-16 rounded-2xl w-5/6"
                        style={[styles.boxShadown, styles.androidShadow]}
                    >
                        <TextInput
                            placeholder={email}
                            value={email}
                            onChangeText={getEmail}
                            keyboardType="email-address"
                            className="flex items-start justify-start text-lg w-5/6 pl-8"
                        />
                    </View>
                </View>
                <View className="flex items-center w-full mb-2">
                    <Text className='w-5/6 mb-2 text-green-near-dark text-lg'>Senha:</Text>
                    <View
                        className="flex flex-row items-center justify-center bg-white h-16 rounded-2xl w-5/6"
                        style={[styles.boxShadown, styles.androidShadow]}
                    >
                        <TextInput
                            placeholder='******'
                            value={password}
                            onChangeText={getPassword}
                            secureTextEntry={true}
                            className="flex items-start justify-start text-lg w-5/6 pl-8"
                        />
                    </View>
                </View>
                <View className="flex items-center w-full mb-2">
                    <Text className='w-5/6 mb-2 text-green-near-dark text-lg'>Senha:</Text>
                    <View
                        className="flex flex-row items-center justify-center bg-white h-16 rounded-2xl w-5/6"
                        style={[styles.boxShadown, styles.androidShadow]}
                    >
                        <TextInput
                            placeholder='******'
                            value={confirmPassword}
                            onChangeText={getConfirmPassword}
                            secureTextEntry={true}
                            className="flex items-start justify-start text-lg w-5/6 pl-8"
                        />
                    </View>
                </View>
                <View className="flex items-center justify-center w-full mt-8">
                    <Text className="text-green-near-dark font-bold text-lg">Já possui um cadastro ?</Text>
                    <Pressable
                        className="flex items-center justify-center rounded-2xl w-32 mt-2"
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text className="text-gray-near font-bold text-lg">Login</Text>
                    </Pressable>
                    <Pressable
                        className="flex items-center justify-center mt-8 bg-green-near-light rounded-2xl w-32 h-14"
                        onPress={() => createAnAccoung()}
                    >
                        <Text className="text-white font-bold text-lg">Cadastrar</Text>
                    </Pressable>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    boxShadown: {
        shadowColor: "rgba(0, 0, 0, 0.5)",
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 0.6,
        shadowRadius: 4,
    },
    androidShadow: {
        elevation: 10,
    },
});