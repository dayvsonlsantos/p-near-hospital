import React from 'react';

import { StyleSheet, TextInput, View } from "react-native";

// Icones
import Icon from './Svg';


export default function SearchBar({ setSearchTerm }) {

    // Define o valor da busca
    const handleSearchTermChange = (text) => {
        setSearchTerm(text);
    };

    return (
        <View className="absolute flex items-center w-full pt-12 h-16">
            <View
                className="flex flex-row items-center justify-center bg-white h-16 rounded-2xl w-5/6"
                style={[styles.boxShadown, styles.androidShadow]}
            >
                <TextInput
                    placeholder="Informe a especialidade"
                    onChangeText={handleSearchTermChange}
                    className="flex items-start justify-start text-lg w-5/6 pl-8"
                />
                <View className="w-1/6 h-4/6 flex items-center justify-center">
                    <Icon iconName={'SEARCH'} />
                </View>
            </View>
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