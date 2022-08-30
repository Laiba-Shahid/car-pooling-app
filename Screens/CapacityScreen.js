import { View, Text } from "react-native";
import CardModal from "../components/Cardmodal";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FullButton } from "../components/FullButton";
import GlobalStyles from "../styles/GlobalStyles";
import Icon from "react-native-vector-icons/AntDesign";
const CapacityScreen = () => {
  const [visible, setVisible] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [id, setId] = useState();

  const selectSeat = (seatId) => {
    setId(seatId);
    setVisible(true);
    console.log("seat select", seatId);
  };

  useEffect(() => {
    console.log("SELECTED SEAT", selectedSeat);
  }, [selectedSeat]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ffffff",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <CardModal visible={visible} setVisible={setVisible}>
        <View
          style={{
            width: 290,
            height: 290,
            borderRadius: 20,
            justifyContent: "center",
          }}
        >
          <>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                ...GlobalStyles.mainmarginbottom,
              }}
            >
              <TouchableOpacity
                style={{
                  width: 70,
                  height: 70,
                  backgroundColor: "#f5bc42",
                  borderRadius: 12,
                  justifyContent: "space-between",
                }}
                onPress={() => {
                  console.log("selectSeat");
                }}
              />
              <Text
                style={{
                  ...GlobalStyles.mainmarginleft,
                  ...GlobalStyles.leftSubheader,
                }}
              >
                My Seat
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                ...GlobalStyles.mainmarginbottom,
              }}
            >
              <TouchableOpacity
                style={{
                  width: 70,
                  height: 70,
                  backgroundColor: "#fb607f",
                  borderRadius: 12,
                  justifyContent: "space-between",
                }}
              />
              <Text
                style={{
                  ...GlobalStyles.mainmarginleft,
                  ...GlobalStyles.leftSubheader,
                }}
              >
                Share (Female){" "}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                ...GlobalStyles.mainmarginbottom,
              }}
            >
              <TouchableOpacity
                style={{
                  width: 70,
                  height: 70,
                  backgroundColor: "#3063ed",
                  borderRadius: 12,
                  justifyContent: "space-between",
                }}
              />
              <Text
                style={{
                  ...GlobalStyles.mainmarginleft,
                  ...GlobalStyles.leftSubheader,
                }}
              >
                Share (Male){" "}
              </Text>
            </View>
          </>
        </View>
      </CardModal>

      <View
        style={{
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 290,
            backgroundColor: "#f0f3f5",
            borderRadius: 12,
            justifyContent: "space-around",
            padding: 10,
            alignSelf: "center",
            flexDirection: "row",
          }}
        >
          <Icon name="pushpin" size={20} color="#ADADAD" />
          <Text style={{ marginLeft: 10 }}>
            Your fare will decrease when more users will book seat on this ride.
          </Text>
        </View>
        <View>
          <Text
            style={{
              ...GlobalStyles.leftmainheader,
              ...GlobalStyles.mainmargintop,
              ...GlobalStyles.mainmarginbottom,
            }}
          >
            Seat Status
          </Text>
          <View
            style={{
              borderRadius: 12,
              width: 290,
              borderWidth: 1,
              borderColor: "#ADADAD",
              padding: 20,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ alignItems: "center", marginRight: 20 }}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "#35b24c",
                    borderRadius: 5,
                    justifyContent: "space-between",
                  }}
                />
                <Text>Free</Text>
              </View>
              <View style={{ alignItems: "center", marginRight: 20 }}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "#3063ed",
                    borderRadius: 5,
                    justifyContent: "space-between",
                  }}
                />
                <Text>Male</Text>
              </View>
              <View style={{ alignItems: "center", marginRight: 20 }}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "#fb607f",
                    borderRadius: 5,
                    justifyContent: "space-between",
                  }}
                />
                <Text>Female</Text>
              </View>
              <View style={{ alignItems: "center", marginRight: 20 }}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "#f5bc42",
                    borderRadius: 5,
                    justifyContent: "space-between",
                  }}
                />
                <Text>My seat</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text
            style={{
              ...GlobalStyles.leftmainheader,
              ...GlobalStyles.mainmarginbottom,
              ...GlobalStyles.mainmargintop,
            }}
          >
            Choose Your Seats
          </Text>
          <View
            style={{
              width: 290,
              height: 250,
              backgroundColor: "#f0f3f5",
              borderRadius: 20,
              justifyContent: "space-around",
              padding: 10,
              alignSelf: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 70,
                  height: 70,
                  backgroundColor: "#35b24c",
                  borderRadius: 20,
                  justifyContent: "space-between",
                }}
                id={"s1"}
                onPress={() => selectSeat("s1")}
              />

              <TouchableOpacity
                style={{
                  width: 70,
                  height: 70,
                  backgroundColor: "#ADADAD",
                  borderRadius: 20,
                  justifyContent: "space-between",
                }}
                id={"s2"}
              />
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <TouchableOpacity
                style={{
                  width: 70,
                  height: 70,
                  backgroundColor: "#35b24c",
                  borderRadius: 20,
                  justifyContent: "space-between",
                }}
                id={"s3"}
                onPress={() => selectSeat("s3")}
              />

              <TouchableOpacity
                style={{
                  width: 70,
                  height: 70,
                  backgroundColor: "#35b24c",
                  borderRadius: 20,
                  justifyContent: "space-between",
                }}
                id={"s4"}
                onPress={() => selectSeat("s4")}
              />

              <TouchableOpacity
                style={{
                  width: 70,
                  height: 70,
                  backgroundColor: "#35b24c",
                  borderRadius: 20,
                  justifyContent: "space-between",
                }}
                id={"s5"}
                onPress={() => selectSeat("s5")}
              />
            </View>
          </View>
        </View>
        <Text style={{ alignSelf: "flex-end", marginTop: 10 }}>
          Estimated Fare : Rs 390
        </Text>
      </View>

      <FullButton
        buttonAction={() => {
          console.log("ride started page ");
        }}
        title={"BOOK KARO"}
      />
    </View>
  );
};

export default CapacityScreen;
