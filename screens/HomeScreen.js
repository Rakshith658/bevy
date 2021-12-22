import React, { useLayoutEffect } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Card from "../components/Card";
import CustomHeaderButton from "../components/CustomHeaderButton";
import MainButton from "../components/MainButton";
import Month from "../components/Month";
import account from "../data/data";

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: account.name,
      headerLeft: () => (
        <View style={styles.headerLeft}>
          <Image
            source={{
              uri: account.profileimage,
            }}
            style={styles.image}
          />
        </View>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item title="search" iconName="search" />
          <Item title="more" iconName="more-vertical" />
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Card style={styles.CardContainer}>
          <Text style={styles.card_title}>TOTAL PAYABLE</Text>
          <Text style={styles.card_Amt}> {account.amtpayable}</Text>
        </Card>
        <MainButton style={styles.main_button}>Settle Up</MainButton>
      </View>
      {/* <View style={{ backgroundColor: "white", marginTop: 10 }}> */}
      <FlatList
        data={account.transation}
        keyExtractor={(item) => item.key}
        renderItem={(item) => <Month transation={item.item} />}
      />
      {/* </View> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 60,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  CardContainer: {
    marginTop: 10,
    width: "90%",
    height: 150,
    backgroundColor: "#FF6666",
    alignItems: "center",
    justifyContent: "center",
  },
  card_title: {
    letterSpacing: 1,
    fontSize: 13,
    color: "white",
  },
  card_Amt: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  main_button: {
    marginTop: 10,
  },
});
