import React, { FC } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { PostImage } from "../../types";

const TodaysImages: FC<PostImage> = ({ date, title, url }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: url }} style={styles.img} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <View  style={styles.btnContainer}>
          <Button
            title="View"
            onPress={() => {
              console.log("view");
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:  "rgb(77, 106, 193)",
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 16,
    padding: 16,
  },
  imgContainer: {},
  img: {
    width: "100%",
    height: 300,
    borderRadius: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  date: {
    fontSize: 16,
    color: "#ffffff",

  },
  btnContainer:{
   alignItems:"flex-end",
  } 
});

export default TodaysImages;
