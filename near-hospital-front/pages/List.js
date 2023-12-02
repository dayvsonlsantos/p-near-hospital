import React from 'react';
import { Pressable, StyleSheet, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

export default function List() {

    const navigation = useNavigation();

    return (
        <View className="w-full h-screen ">
            <View className="flex-row flex items-center justify-start ml-6 mt-16 ">
                <Pressable
                    className="z-10 absolute flex items-center justify-center w-14 h-14 rounded-full bg-white"
                    style={[styles.boxShadown, styles.androidShadow]}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Entypo name="back" size={24} color="#88C625" />
                </Pressable>
                <Text className="font-semibold text-center w-full text-3xl text-gray-near">Lista</Text>
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