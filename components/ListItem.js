import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { render } from "react-dom";

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
  },
  leftContainer: {
    backgroundColor: "red",
    width: 100,
  },
  rightContainer: {
    //描画可能エリアを目一杯使う
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
});

const ListItem = ({ imageUrl, title, auther, onPress }) => {
  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
      <View style={styles.leftContainer}>
        <Image style={{ width: 100, height: 100 }} source={{ uri: imageUrl }} />
      </View>

      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>
          {title}
        </Text>
        <Text style={styles.subText}>{auther}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
