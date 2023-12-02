import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./pages/Home";
import List from "./pages/List";
import User from "./pages/User";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false, // Oculta a barra superior por padrão
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                ></Stack.Screen>
                <Stack.Screen
                    name="User"
                    component={User}
                ></Stack.Screen>
                <Stack.Screen
                    name="List"
                    component={List}
                ></Stack.Screen>
            </Stack.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}