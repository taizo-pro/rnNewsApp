import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
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
    justifyContent:"space-between",
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
});

export default function App() {
  return (
    //変数stylesのcontainerを呼び出している
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.leftContainer}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: "https://picsum.photos/200/300" }}
          />
        </View>

        <View style={styles.rightContainer}>
          <Text numberOfLines={3} style={styles.text}>
            Just add your desired image size (width & height) after our URL, and
            you'll get a random image.Easy to use, stylish placeholders
          </Text>
          <Text style={styles.subText}>ReactNative</Text>
        </View>
      </View>
    </View>
  );
}
