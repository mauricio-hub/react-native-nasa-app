import React, { FC } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import { PostImage as PostImagesTypes } from "../../types";
import PostImage from "../PostImage/PostImage";

const LastFiveDaysImg: FC<{ postImage?: PostImagesTypes[] }> = ({
  postImage,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>last 5 days images</Text>
      <ScrollView style={styles.content}>
        {postImage?.map((postImage, index) => (
          <PostImage key={`post-image-${index}`} {...postImage} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  title: {
    color: "white",
    fontSize: 16,
    marginBottom: 18,
  },
  content: {},
});

export default LastFiveDaysImg;
