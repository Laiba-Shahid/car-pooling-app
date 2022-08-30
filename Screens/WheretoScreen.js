import { useNavigation } from "@react-navigation/native";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const WhereToScreen = () => {
  const imageName = require("../assets/whereTo.jpg");
  const navigator = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={imageName}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.bottomTab}>
          <TouchableOpacity
            onPress={() => {
              navigator.navigate("Chalo");
            }}
          >
            <View style={{ minHeight: 100, minWidth: "100%" }}></View>
          </TouchableOpacity>
          <View style={{ backgroundColor: "red", width: 300 }}></View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WhereToScreen;

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
    backgroundColor: "#0000000",
  },
  bottomTab: {
    minWidth: "100%",
    position: "absolute",
    bottom: 0,
    minHeight: 110,
    justifyContent: "center",
    alignItems: "center",
  },
});
