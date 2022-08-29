

import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const imageName = require('../assets/chalo.jpg');
const ChaloScreen = () => {


    return <View style={styles.container}>
        <ImageBackground source={imageName} resizeMode="cover" style={styles.image}>

        </ImageBackground>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
});

export default ChaloScreen
