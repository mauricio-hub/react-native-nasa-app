import React from "react";
import { View, Text,Image,StyleSheet } from "react-native";
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text  style={styles.title} >Explore</Text>
      </View>
      <View style={styles.rigthContainer}>
        <Image source={require("../../../assets/logo-r.png")} style={styles.image} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  leftContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  rigthContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fffdfd",
  },
  image: {
    width: 60,
    height: 60,

  },
});



export default Header;
