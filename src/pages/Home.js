import React, { useState } from "react";
import { FlatList,  Text, View, } from "react-native";
import CharactersCard from "../components/cards/CharactersCard";
import {Button } from "@rneui/themed";

import { useAPICharacters } from "../context/APIContext";
import FilterModal from "../components/modals/FilterModal";



export default function Home() {

    const [FilterModalVisible, setFilterModalVisible] = useState(false);

    // Gelen API
    const APICharacters = useAPICharacters();

    // Modal'dan gelen filtreler
    const [searchName, setSearchName] = useState("");
    const [status, setStatus] = useState(""); 
    const [location, setLocation] = useState(""); 


    // Gelen API YOKSA DÖNECEK SAYFA

    if (!APICharacters) {

        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text>Loading...</Text>
            </View>
        )

    }


    return (
        <View >

            <FlatList
                data={APICharacters.filter(s => {
                    return (
                        String(s.name).includes(searchName)
                    );
                }) &&
                    APICharacters.filter(s => {
                        return (
                            String(s.status).includes(status)
                        )
                    })
                    &&
                    APICharacters.filter(s => {
                        return (
                            String(s.location.name).includes(location)
                        )
                    })
                }
                contentContainerStyle={{ marginHorizontal: 16, paddingTop: 12 }}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={({ }) => (
                    <Button
                        onPress={() => setFilterModalVisible(!FilterModalVisible)}
                        title="FİLTRELEME"
                        color="#841584"
                        buttonStyle={{ paddingVertical: 12, marginBottom: 12 }}
                        titleStyle={{ fontSize: 18 }}
                    />
                )}
                renderItem={({ item }) => (
                    <CharactersCard
                        CharacterName={item.name}
                        CharacterImage={item.image}
                        CharacterStatus={item.status}
                        CharacterLocation={item.location.name}
                    />
                )}
            />

            <FilterModal

                FilterModalVisible={FilterModalVisible}
                ButtonPress={() => setFilterModalVisible(false)}
                setSearchName={setSearchName}
                setStatus={setStatus}
                setLocation={setLocation}
            />


        </View>

    )
}