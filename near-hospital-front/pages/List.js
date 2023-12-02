import React from 'react';
import { Text, View } from "react-native";
import FloatingButton from '../components/FloatingButton';
import { StatusBar } from 'expo-status-bar';

export default function List() {
    return (
        <View className="w-full h-screen ">
            <View className="absolute flex items-center justify-end w-full h-full">
                <FloatingButton />
            </View>
            <Text className="text-lg">Ola List</Text>
            <StatusBar style="auto" />
        </View>
    )
}