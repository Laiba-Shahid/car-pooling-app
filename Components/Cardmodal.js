import React, { useState } from "react";
import { Overlay } from "@rneui/themed";
import {
    View,

    StyleSheet,

} from "react-native";

const CardModal = ({ children, visible, setVisible }) => {
    const toggleOverlay = () => {
        setVisible(!visible);
    };
    return (
        <View>
            <Overlay
                animationType="fade"
                transparent={true}
                isVisible={visible}
                onBackdropPress={toggleOverlay}
                fullScreen={false}
                overlayStyle={{
                    // justifyContent: "center",
                    height: 300,
                    alignItems: "center",
                }}
            >
                {children}
            </Overlay>
        </View>
    );
};

export default CardModal;

const styles = StyleSheet.create({});