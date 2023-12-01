// React e Native
import { ActivityIndicator, Text, View } from "react-native";
import { useEffect, useRef, useState } from "react";

// Expo
import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
    watchPositionAsync,
    LocationAccuracy,
} from "expo-location";

// Componentes
import Icon from "../components/Svg";
import Map from '../components/Map';
import FloatingButton from "../components/FloatingButton";

export default function Home() {

    // Loading
    const [isLoading, setIsLoading] = useState(true);

    // Localização do Usuário
    const [location, setLocation] = useState(null);

    // Permisão de Localização
    async function requestLocationPermissions() {
        const { granted } = await requestForegroundPermissionsAsync();

        if (granted) {
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition);
        }
    }

    // Requisitar Permisão
    useEffect(() => {
        requestLocationPermissions();
    }, []);


    const mapRef = useRef(null);

    // Pegar Posição do Usuário
    useEffect(() => {
        watchPositionAsync(
            {
                accuracy: LocationAccuracy.Highest,
                timeInterval: 1000,
                distanceInterval: 1,
            },
            (response) => {
                setLocation(response);
                mapRef.current?.animateCamera({
                    pitch: 10,
                    center: response.coords,
                });
                setIsLoading(false);
            }
        );
    }, []);

    return (
        <View className="w-full h-screen ">
            {isLoading ? (
                // Mostra um indicador de loading enquanto o mapa está sendo carregado
                <View className="w-full h-full">
                    <View className="w-full h-1/2 flex items-center justify-center">
                        <Icon iconName='LOGO' />
                    </View>
                    <ActivityIndicator
                        className="w-full h-1/2"
                        size="large"
                        color="#88C625"
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    />
                </View>
            ) : (
                <View className="w-full h-full">
                    <Map location={location} mapRef={mapRef} />
                    <View className="absolute flex items-center justify-end w-full h-full">
                        <View className="absolute">
                            <FloatingButton />
                        </View>
                    </View>
                </View>
            )}
        </View>
    )
}