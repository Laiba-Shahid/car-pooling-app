import { useNavigation } from "@react-navigation/native";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
const imageName = require("../assets/start.jpg");
const StartScreen = () => {
  const navigator = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={imageName}
        resizeMode="cover"
        style={styles.image}
      >
        <TouchableOpacity
          onPress={() => {
            navigator.navigate("WhereTo");
          }}
        >
          <View
            style={{
              minHeight: "50%",
              minWidth: "100%",
            }}
          ></View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
