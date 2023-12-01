import React from 'react';
import { Pressable, Text, View } from "react-native";
import Icon from './Svg';

export default function List({defineMapMode, mapMode}) {
    return (
        <View className="relative flex items-center justify-end w-full ">
            <View className="mb-4 flex items-center justify-center w-4/6 h-28 bg-white rounded-2xl">
                <Text className="w-full text-gray-near h-1/3 flex items-center justify-center p-1 text-lg font-bold text-center rounded-2xl">
                    Traçar Rota
                </Text>
                <View className="w-full h-2/3 flex items-center justify-end flex-row">
                    <Pressable
                        className={`w-1/3 ${mapMode === "WALKING" ? 'bg-gray-100' : 'bg-white'}  p-4 rounded-2xl h-full flex items-center justify-center`}
                        accessibilityLabel="Clique para traçar a rota"
                        onPress={() => defineMapMode("WALKING")}
                    >
                        <Icon iconName='WALKING' />
                    </Pressable>
                    <Pressable
                        className={`w-1/3 ${mapMode === "DRIVING" ? 'bg-gray-100' : 'bg-white'}  p-4 rounded-2xl h-full flex items-center justify-center`}
                        accessibilityLabel="Clique para traçar a rota"
                        onPress={() => defineMapMode("DRIVING")}
                    >
                        <Icon iconName='DRIVING' />
                    </Pressable>
                    <Pressable
                        className={`w-1/3 ${mapMode === "BICYCLING" ? 'bg-gray-100' : 'bg-white'}  p-4 rounded-2xl h-full flex items-center justify-center`}
                        accessibilityLabel="Clique para traçar a rota"
                        onPress={() => defineMapMode("BICYCLING")}
                    >
                        <Icon iconName='BICYCLING' />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
