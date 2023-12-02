import { StatusBar } from "expo-status-bar";
import { Animated, TouchableWithoutFeedback, View } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export default function FloatingButton({optionFloating}) {

    const navigation = useNavigation();

    animation = new Animated.Value(0);
    let open = {optionFloating} || false;

    toggleMenu = () => {
        const toValue = open ? 0 : 1;

        Animated.spring(animation, {
            toValue,
            friction: 5,
            useNativeDriver: false
        }).start()

        open = !open;
    }

    const listStyle = {
        transform: [
            { scale: animation },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -200],
                })
            }
        ]
    }

    const userStyle = {
        transform: [
            { scale: animation },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -140],
                })
            }
        ]
    }

    const homeStyle = {
        transform: [
            { scale: animation },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -80],
                })
            }
        ]
    }

    const rotation = {
        transform: [
            {
                rotate: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "45deg"]
                })
            }
        ]
    }

    return (
        <View className="flex items-center justify-center bottom-48 left-40">

            <TouchableWithoutFeedback onPress={() => navigation.navigate('List')}>
                <Animated.View
                    className="absolute flex items-center justify-center w-12 h-12 rounded-full bg-white"
                    style={[listStyle]}
                >
                    <Entypo name="list" size={20} color="#88C625" />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('User')}>
                <Animated.View
                    className="absolute flex items-center justify-center w-12 h-12 rounded-full bg-white"
                    style={[userStyle]}
                >
                    <Entypo name="user" size={20} color="#88C625" />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
                <Animated.View
                    className="absolute flex items-center justify-center w-12 h-12 rounded-full bg-white"
                    style={[homeStyle]}
                >
                    <Entypo name="home" size={20} color="#88C625" />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={this.toggleMenu}>
                <Animated.View
                    className="absolute w-14 h-14 rounded-full flex items-center justify-center shadow-lg bg-green-near-light"
                    style={[rotation]}
                >
                    <AntDesign name="plus" size={24} color="#fff" />
                </Animated.View>
            </TouchableWithoutFeedback>
            <StatusBar style="auto" />
        </View >
    );
}