import {
  Alert,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FullButton } from "../Components/FullButton";

const imageName = require("../assets/chalo.jpg");

const ChaloScreen = ({ navigation }) => {
  const showSuggestedRidesBtn = false;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={imageName}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.bottomTab}>
          <View style={styles.buttonContainer}>
            <View style={styles.chaloButtonContainer}>
              <FullButton
                title="CHALO"
                buttonAction={() => {
                  console.log("normal ride");
                  navigation.navigate("Suggested Rides", {});
                }}
                buttonStyle={{
                  ...(showSuggestedRidesBtn && {
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }),
                }}
              />
              {/* <FullButton
                title="CHALO"
                buttonAction={() => {
                  console.log("normal ride");
                  navigation.navigate("Suggested Rides", {});
                }}
                buttonStyle={{
                  ...(showSuggestedRidesBtn && {
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }),
                }}
              /> */}
            </View>
            <FullButton
              title="SHARE KARO"
              buttonAction={() => {
                console.log("decide capacity page");
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    flexDirection: "row",
    backgroundColor: "red",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  bottomTab: {
    minWidth: "100%",
    position: "absolute",
    bottom: 0,
    minHeight: 160,
    borderRadius: 50,
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  chaloButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default ChaloScreen;
