import React, { FC } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import { PostImage as PostImageTypes} from "../../types";

const PostImg: FC<PostImageTypes> = ({title,date})=> {
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>

      <View style={styles.btnContainer}>
        <Button title="ver imagen" onPress={()=>{
          console.log("ver imagen")
        }}/>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(77, 106, 193)",
    borderRadius: 20,
    marginBottom:12,
    padding:16,
    minHeight:120,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    color: "white",
    fontSize: 14,
  },
  btnContainer:{
    alignItems:"flex-end",
  }
});

export default PostImg;
