import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Transation = ({ info }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.date_info}>{info.date}</Text>
        <Image source={{ uri: info.image }} style={styles.image} />
        <View style={styles.detail}>
          <Text style={styles.title_info}>{info.title}</Text>
          <Text style={styles.desc_info}>{info.desc}</Text>
        </View>
      </View>
      <Text style={styles.info_amt}>{info.amt}</Text>
    </View>
  );
};

export default Transation;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginVertical: 6,
  },
  leftContainer: {
    flexDirection: "row",
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginHorizontal: 15,
  },
  date_info: {
    color: "grey",
    alignSelf: "center",
  },
  title_info: {
    fontWeight: "bold",
    fontSize: 15,
  },
  desc_info: {
    color: "grey",
    fontSize: 12,
  },
  info_amt: {
    fontWeight: "bold",
    fontSize: 25,
  },
});
