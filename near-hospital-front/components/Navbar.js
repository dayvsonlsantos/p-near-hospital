import { View, StyleSheet, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Navbar() {
  return (
    <View
      className="flex items-center justify-center bg-white h-16 rounded-full w-4/6"
      style={[styles.boxShadown, styles.androidShadow]}
    >
      <TextInput
        placeholder="Informe a especialidade"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  boxShadown: {
    shadowColor: "rgba(0, 0, 0, 0.2)",
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
