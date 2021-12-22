import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Transation from "./Transation";

const Month = ({ transation }) => {
  return (
    <View style={{ marginHorizontal: 5, marginVertical: 5 }}>
      <Text>{transation.month}</Text>
      <FlatList
        data={transation.signaltransation}
        keyExtractor={(item) => item.key}
        renderItem={(item) => <Transation info={item.item} />}
      />
      <View style={styles.linebar} />
    </View>
  );
};

export default Month;

const styles = StyleSheet.create({
  linebar: {
    borderWidth: 0.5,
    marginTop: 5,
    color: "grey",
  },
});
