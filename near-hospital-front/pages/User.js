import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from "react-native";
import FloatingButton from '../components/FloatingButton';

export default function User() {

    const [name, setName] = useState('Teste')
    const [email, setEmail] = useState('Teste')
    const [password, setPassword] = useState('Teste')

    return (
        <View className="w-full h-screen">
            <View className="absolute flex items-center justify-end w-full h-full">
                <FloatingButton />
            </View>
            <Text className="w-full font-semibold flex items-center justify-center h-10 mt-12 mb-6 text-center text-3xl text-gray-near">Perfil</Text>
            <View className="flex items-center w-full pt-12 h-20 mb-10">
                <Text className='w-5/6 h-full mb-2 text-green-near-dark text-lg'>Nome completo:</Text>
                <View
                    className="flex flex-row items-center justify-center bg-white h-16 rounded-2xl w-5/6"
                    style={[styles.boxShadown, styles.androidShadow]}
                >
                    <TextInput
                        placeholder={name}
                        onChangeText={''}
                        className="flex items-start justify-start text-lg w-5/6 pl-8"
                    />
                </View>
            </View>
            <View className="flex items-center w-full pt-12 h-20 mb-10">
                <Text className='w-5/6 h-full mb-2 text-green-near-dark text-lg'>Email:</Text>
                <View
                    className="flex flex-row items-center justify-center bg-white h-16 rounded-2xl w-5/6"
                    style={[styles.boxShadown, styles.androidShadow]}
                >
                    <TextInput
                        placeholder={email}
                        onChangeText={''}
                        keyboardType="email-address"
                        className="flex items-start justify-start text-lg w-5/6 pl-8"
                    />
                </View>
            </View>
            <View className="flex items-center w-full pt-12 h-20 mb-10">
                <Text className='w-5/6 h-full mb-2 text-green-near-dark text-lg'>Senha:</Text>
                <View
                    className="flex flex-row items-center justify-center bg-white h-16 rounded-2xl w-5/6"
                    style={[styles.boxShadown, styles.androidShadow]}
                >
                    <TextInput
                        placeholder='******'
                        onChangeText={''}
                        secureTextEntry={true}
                        className="flex items-start justify-start text-lg w-5/6 pl-8"
                    />
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