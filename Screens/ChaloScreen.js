

import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FullButton } from '../Components/FullButton';
const imageName = require('../assets/chalo.jpg');
const ChaloScreen = () => {

    const navigator = useNavigation();

    return <View style={styles.container}>
        <ImageBackground source={imageName} resizeMode="cover" style={styles.image}>
            <View style={styles.bottomTab}>
                <View style={styles.buttonContainer}>
                    <FullButton title="CHALO" buttonAction={() => { console.log('normal ride') }} />
                    <FullButton title="SHARE KARO" buttonAction={() => { navigator.navigate("Capacity") }} />
                </View>
            </View>
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
    bottomTab: {
        minWidth: '100%',
        position: 'absolute',
        bottom: 0,
        minHeight: 160,
        borderRadius: 50,
        backgroundColor: '#ffffff',
        justifyContent: 'center',


    },
    buttonContainer: {

        justifyContent: 'center',
        alignItems: 'center'
    },



});

export default ChaloScreen
