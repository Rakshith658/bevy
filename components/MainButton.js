import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View style={[styles.MainButton, props.style]}>
        <Text style={styles.Text}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  MainButton: {
    paddingVertical: 12,
    paddingHorizontal: Dimensions.get("window").width / 3,
    borderRadius: 25,
    justifyContent: "space-between",
    backgroundColor: "#097969",
  },
  Text: {
    color: "white",
    fontSize: 18,
  },
});
