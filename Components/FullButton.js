import { Button } from "@rneui/base";
import { TouchableOpacity } from "react-native";
export const FullButton = ({
  buttonAction,
  title,
  buttonStyle = {},
  containerStyle = {},
  disabled = false,
}) => {
  return (
    <TouchableOpacity style={{ width: "90%", alignItems: "center" }}>
      <Button
        title={title}
        size="lg"
        buttonStyle={{
          backgroundColor: "#28bc4e",
          borderRadius: 12,
          ...buttonStyle,
        }}
        containerStyle={{
          width: "100%",
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        disabledStyle={{
          backgroundColor: "#ADADAD",
        }}
        disabledTitleStyle={{ color: "white" }}
        titleStyle={{ fontWeight: "bold" }}
        onPress={buttonAction}
        disabled={disabled}
      />
    </TouchableOpacity>
  );
};
