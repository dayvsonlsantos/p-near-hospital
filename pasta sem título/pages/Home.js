import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import FloatingButton from "../components/FloatingButton";

export default function Home() {
    return (
        <View className="w-full h-screen ">
            <View className="absolute flex items-center justify-end w-full h-full">
                <View className="absolute">
                    <FloatingButton className="" />
                </View>
            </View>
            <Text className="text-lg">Ola Home</Text>
            <StatusBar style="auto" />
        </View>
    )
}