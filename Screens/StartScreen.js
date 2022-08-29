import { useNavigation } from "@react-navigation/native"
import { View, Text, Button } from "react-native"

const StartScreen = () => {
    const navigation = useNavigation();
    return <View>
        <Text>This is Start Screens</Text>

        <Button onPress={() => navigation.navigate("Chalos")} title="chalo"></Button>
    </View>
}


export default StartScreen