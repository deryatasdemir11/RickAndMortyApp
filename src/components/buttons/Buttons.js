import { Button } from "@rneui/themed";
import React from "react";

export default function Buttons({
    ButtonPress,
    ButtonTitle
}) {
    return (
        <Button
            onPress={ButtonPress}
            title={ButtonTitle}
            color="#841584"
            buttonStyle={{ paddingVertical: 12, marginBottom: 12 }}
            titleStyle={{ fontSize: 18 }}
        />
    )
}