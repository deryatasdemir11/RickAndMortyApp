import React from "react";
import { View, Text, Image } from "react-native";

export default function CharactersCard({
  CharacterName,
  CharacterStatus,
  CharacterLocation,
  CharacterImage
}) {
  return (
    <View style={{ borderWidth: 1, width: "100%", paddingVertical: 16, paddingHorizontal: 12, flexDirection: 'row', borderRadius: 8, borderColor: "#9d9d9d", marginBottom: 12 }}>
      <Image source={{ uri: CharacterImage }}
        style={{ width: 60, height: 60 }} />
      <View style={{ marginHorizontal: 12, flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{CharacterName}</Text>
          <Text style={{ fontWeight: '500', fontSize: 14 }}>{CharacterStatus}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../../assets/location.png')} style={{ width: 14, height: 14, marginRight: 2 }} />
            <Text style={{ fontWeight: '400', fontSize: 12, }}>{CharacterLocation}</Text>
          </View>
        </View>

      </View>

    </View>
  )
}