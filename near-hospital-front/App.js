import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
} from "react-native";
import Navbar from "./components/Navbar";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  watchPositionAsync,
  LocationAccuracy,
} from "expo-location";
import { useEffect, useState, useRef } from "react";
import MapViewDirections from "react-native-maps-directions";
import Icon from "./components/Svg";
import config from './config';
import MedicalFacilities from './json/medicalFacilitiesRecife'

export default function App() {

  const [location, setLocation] = useState(null);

  const [pressedLocation, setPressedLocation] = useState({});

  const [showRouteButton, setShowRouteButton] = useState(false);

  const [destinationLocation, setDestinationLocation] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const mapRef = useRef(null);

  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  }

  useEffect(() => {
    requestLocationPermissions();
  }, []);

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

  const handleMapPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setPressedLocation({ latitude, longitude });
    setShowRouteButton(true);
  };

  const [mapMode, setMapMode] = useState("");

  const handleRouteButtonClick = (value) => {
    if (pressedLocation) {
      // Atualiza o estado da localização de destino para iniciar a rota
      setDestinationLocation(pressedLocation);
    }
  };

  function defineMapMode(value) {
    if (mapMode === value && mapMode != "") {
      setPressedLocation({});
      setDestinationLocation({});
      setShowRouteButton(false);
      setMapMode("");
    } else {
      setMapMode(value);
      handleRouteButtonClick();
    }
  }

  // Iterando sobre os registros
  const markers = MedicalFacilities.records.map(record => {
    const latitude = record[record.length - 2];
    const longitude = record[record.length - 1];

    return {
      coordinate: {
        latitude: latitude,
        longitude: longitude,
      },
      title: record[2], // Ou qualquer índice correspondente ao título
      description: record[8], // Ou qualquer índice correspondente à descrição
    };
  });

  return (
    <View className="border w-full h-screen">
      <View className="w-full h-full">
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
            <MapView
              ref={mapRef}
              className="w-full h-full"
              initialRegion={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }}
              showsUserLocation
              zoomControlEnabled
              followsUserLocation
              provider={PROVIDER_GOOGLE}
              onPress={handleMapPress}
            >
              {destinationLocation.latitude && (
                <MapViewDirections
                  origin={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                  }}
                  destination={{
                    latitude: destinationLocation?.latitude || 0,
                    longitude: destinationLocation?.longitude || 0,
                  }}
                  apikey={config.GOOGLE_API_KEY}
                  strokeWidth={5}
                  strokeColor="#88C625"
                  mode={mapMode}
                />
              )}
              <Marker
                coordinate={{
                  latitude: pressedLocation?.latitude || 0,
                  longitude: pressedLocation?.longitude || 0,
                }}
              />
              {markers.map((marker, index) => (
                <Marker
                  key={index}
                  coordinate={marker.coordinate}
                  title={marker.title}
                  description={marker.description}
                  onPress={handleMapPress}
                />
              ))}
            </MapView>
            <View className="absolute flex items-center w-full pt-12 h-16">
              <Navbar />
            </View>
            <View className="absolute flex items-center justify-end w-full h-full">
              {showRouteButton && (

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
              )}
            </View>
          </View>
        )}
      </View>
      <StatusBar style="auto" />
    </View>
  );
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
