import React, { useEffect, useState } from "react";
import { Modal, Text, TextInput, View, } from "react-native";
import { ListItem,} from "@rneui/themed";

import { useAPICharacters, useAPILocations } from "../../context/APIContext";
import Buttons from "../buttons/Buttons";


export default function FilterModal({
    FilterModalVisible,
    ButtonPress,
    setSearchName,
    setStatus,
    setLocation
}) {


    const [SearchName, setSearchNameLocal] = useState(""); // Local Name

    // SearchName değiştiğinde diğer sayfaya iletilmesini sağlar
    useEffect(() => {
        setSearchName(SearchName);
    }, [SearchName, setSearchNameLocal]);

    const [Accordion2, setAccordion2] = useState(false); // Status Filter

    const [Status, setStatusLocal] = useState(""); // Local status

    // Status değiştiğinde diğer sayfaya iletilmesini sağlar
    useEffect(() => {
        setStatus(Status);
    }, [Status, setStatus]);

    const [Accordion3, setAccordion3] = useState(false); // Location Filter

    const [Location, setLocationLocal] = useState(""); // Local status

    // Status değiştiğinde diğer sayfaya iletilmesini sağlar
    useEffect(() => {
        setLocation(Location);
    }, [Location, setLocation]);


    const APICharacters = useAPICharacters();

    const APILocations = useAPILocations();
    return (
        <Modal visible={FilterModalVisible} animationType="slide" transparent={true} >
            <View style={{ marginTop: 64, backgroundColor: '#ffff' }}>


                <TextInput
                    onChangeText={setSearchNameLocal}
                    placeholder="Search..."
                    value={SearchName}
                    style={{ marginHorizontal: 16 }}
                />

                <ListItem.Accordion
                    content={
                        <ListItem.Content >
                            <ListItem.Title>Status</ListItem.Title>
                        </ListItem.Content>
                    }
                    isExpanded={Accordion2}
                    onPress={() => {
                        setAccordion2(!Accordion2);
                    }}
                    noIcon
                    topDivider
                    bottomDivider
                >
                    <ListItem style={{ marginHorizontal: 16 }}>
                        <ListItem.Content>
                            <ListItem.Title onPress={() => setStatusLocal("Alive")}>Alive</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                    <ListItem style={{ marginHorizontal: 16 }}>
                        <ListItem.Content>
                            <ListItem.Title onPress={() => setStatusLocal("Dead")}>Dead</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                </ListItem.Accordion>

                <ListItem.Accordion
                    content={
                        <ListItem.Content>
                            <ListItem.Title>Location</ListItem.Title>
                        </ListItem.Content>
                    }
                    isExpanded={Accordion3}
                    onPress={() => {
                        setAccordion3(!Accordion3);
                    }}
                    noIcon
                >
                    {!APILocations ? <Text>Loading...</Text> : APILocations.map((i, ix) =>
                        <ListItem style={{ marginHorizontal: 16 }}>
                            <ListItem.Title onPress={() => setLocationLocal(i.name)}>{i.name}</ListItem.Title>
                        </ListItem>


                    )}
                </ListItem.Accordion>


                <Buttons
                    ButtonTitle={"FİLTRELE"}
                    ButtonPress={ButtonPress}
                />
            </View>
        </Modal>
    )
}




