
import React from "react";
import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E5E5E5",
    },

    centermainHeader: {
        fontSize: 20,
        fontWeight: "700",

    },

    leftmainheader: {
        fontSize: 20,
        flexWrap: "wrap",

    },
    text: {
        fontSize: 14,

    },
    leftSubheader: {
        fontSize: 16,
        lineHeight: 16,
        flexWrap: "wrap",

    },
    mainmargintop: {
        marginTop: 16,
    },
    mainmarginbottom: {
        marginBottom: 16,
    },
    mainmarginleft: {
        marginHorizontal: 25,
    },
    notification: {
        minWidth: "90%",
        maxWidth: "90%",
        maxHeight: "90%",
        backgroundColor: "white",
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
});

export default GlobalStyles;
