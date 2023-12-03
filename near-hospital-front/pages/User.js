import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import FloatingButton from '../components/FloatingButton';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

export default function User() {

    const navigation = useNavigation();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('Teste')
    const [password, setPassword] = useState('Teste')

    const changeName = (text) => {
        setName(text);
    };

    const changeEmail = (text) => {
        setEmail(text);
    };

    const changePassword = (text) => {
        setPassword(text);
    };

    function Save() {
        console.log(name)
        console.log(email)
        console.log(password)
    }

    return (
        <View className="w-full h-screen">
            <View className="flex-row flex items-center justify-start ml-6 mt-16 ">
                <Pressable
                    className="z-10 absolute flex items-center justify-center w-14 h-14 rounded-full bg-white"
                    style={[styles.boxShadown, styles.androidShadow]}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Entypo name="back" size={24} color="#88C625" />
                </Pressable>
                <Text className="font-semibold text-center w-full text-3xl text-gray-near">Perfil</Text>
            </View>
            <View className="flex items-center w-full mb-2 mt-10">
                <Text className='w-5/6 mb-2 text-green-near-dark text-lg'>Nome completo:</Text>
                <View
                    className="flex flex-row items-center justify-center bg-white h-16 rounded-2xl w-5/6"
                    style={[styles.boxShadown, styles.androidShadow]}
                >
                    <TextInput
                        placeholder={name}
                        value={name}
                        onChangeText={changeName}
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
                        onChangeText={changeEmail}
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
                        onChangeText={changePassword}
                        secureTextEntry={true}
                        className="flex items-start justify-start text-lg w-5/6 pl-8"
                    />
                </View>
            </View>
            <View className="flex items-center justify-center w-full">
                <Pressable
                    className="flex items-center justify-center mt-28 bg-green-near-light rounded-2xl w-32 h-14"
                    onPress={() => Save()}
                >
                    <Text className="text-white font-bold text-lg">Salvar</Text>
                </Pressable>
                <Pressable
                    className="flex items-center justify-center mt-2 rounded-2xl w-32 h-14"
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text className="text-gray-near font-bold text-lg">Sair</Text>
                </Pressable>
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