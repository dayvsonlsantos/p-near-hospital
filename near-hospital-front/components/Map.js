import React from 'react';
import { useState } from "react";
import { View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

// JSON
import MedicalFacilities from '../json/medicalFacilitiesRecife';

// API GOOGLE
import config from '../config';

// Componentes
import SearchBar from "../components/SearchBar";
import RouteBar from '../components/RouteBar';

// Icones
import MarkerIconGray from "../assets/marker-gray.png";
import MarkerIcon from "../assets/marker.png";

export default function Map({ location, mapRef }) {

    // Define a localização do local escolhido no mapa
    const handleMapPress = (event) => {
        const { latitude, longitude } = event.nativeEvent.coordinate;
        setPressedLocation({ latitude, longitude });
        setShowRouteButton(true);
    };

    // Modo de Rota do mapa
    const [mapMode, setMapMode] = useState("");

    const handleRouteButtonClick = (value) => {
        if (pressedLocation) {
            // Atualiza o estado da localização de destino para iniciar a rota
            setDestinationLocation(pressedLocation);
        }
    };

    // Define o modo do mapa
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
            description: record[11], // Ou qualquer índice correspondente à descrição

            cnes: (record[6]).toString(),
            especialidade: record[12],
            tipo_servico: record[8],
            endereco: record[9],
            telefone: record[11],
            horario: record[14],
        };
    });

    // Define o local selecionado
    const [pressedLocation, setPressedLocation] = useState({});

    // Exibe as opções de rota
    const [showRouteButton, setShowRouteButton] = useState(false);

    // Define a locação de destino
    const [destinationLocation, setDestinationLocation] = useState({});


    // Permite a pesquisa 
    const [searchTerm, setSearchTerm] = useState("");

    // Filtra as buscas de acordo com o valor informado
    filteredMarkers = markers.filter((marker) =>
        marker.especialidade.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
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
                zoomControlEnabled={false}
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
                    icon={MarkerIconGray}
                />
                {filteredMarkers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker.coordinate}
                        title={marker.title}
                        onPress={handleMapPress}
                        description={marker.especialidade}
                        icon={MarkerIcon}
                    />
                ))}
            </MapView>
            <SearchBar setSearchTerm={setSearchTerm} />
            <View className="absolute flex items-center justify-end w-full h-full">
                {showRouteButton && (
                    <RouteBar defineMapMode={defineMapMode} mapMode={mapMode}/>
                )}
            </View>
        </View>

    )
}