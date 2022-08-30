import { View, Text } from "react-native";
import GlobalStyles from "../Styles/GlobalStyles";
import CardModal from "../Components/Cardmodal";
import { useState } from "react";
const CapacityScreen = () => {
    const [visible, setVisible] = useState(true);
    return (

        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#ffffff' }}>
            <CardModal visible={visible} setVisible={setVisible}>
                <View style={{ width: 250, height: 250, borderRadius: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', ...GlobalStyles.mainmarginbottom }}>
                        <View style={{ width: 70, height: 70, backgroundColor: "#35b24c", borderRadius: 12, justifyContent: 'space-between' }}>

                        </View>
                        <Text style={{ ...GlobalStyles.mainmarginleft, ...GlobalStyles.leftSubheader }}>My Seat</Text>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', ...GlobalStyles.mainmarginbottom }}>
                        <View style={{ width: 70, height: 70, backgroundColor: "#35b24c", borderRadius: 12, justifyContent: 'space-between' }}>

                        </View>
                        <Text style={{ ...GlobalStyles.mainmarginleft, ...GlobalStyles.leftSubheader }}>Share (Female) </Text>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', ...GlobalStyles.mainmarginbottom }}>
                        <View style={{ width: 70, height: 70, backgroundColor: "#35b24c", borderRadius: 12, justifyContent: 'space-between' }}>

                        </View>
                        <Text style={{ ...GlobalStyles.mainmarginleft, ...GlobalStyles.leftSubheader }}>Share (Male) </Text>

                    </View>
                </View>



            </CardModal >
            <View >

                <Text style={{ ...GlobalStyles.leftmainheader, ...GlobalStyles.mainmarginbottom, ...GlobalStyles.mainmargintop }}>
                    Choose Your Seats
                </Text>



                <View style={{ width: 250, height: 250, backgroundColor: "#f0f3f5", borderRadius: 20, justifyContent: 'space-around', padding: 10, alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: 70, height: 70, backgroundColor: "#35b24c", borderRadius: 20, justifyContent: 'space-between' }}>

                        </View>
                        <View style={{ width: 70, height: 70, backgroundColor: "#35b24c", borderRadius: 20, justifyContent: 'space-between' }}>

                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ width: 70, height: 70, backgroundColor: "#35b24c", borderRadius: 20, justifyContent: 'space-between' }}>

                        </View>
                        <View style={{ width: 70, height: 70, backgroundColor: "#35b24c", borderRadius: 20, justifyContent: 'space-between' }}>

                        </View>
                        <View style={{ width: 70, height: 70, backgroundColor: "#35b24c", borderRadius: 20, justifyContent: 'space-between' }}>

                        </View>
                    </View>
                </View>
            </View>
        </View >
    );
};

export default CapacityScreen;
