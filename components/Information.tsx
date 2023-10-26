import { StyleSheet, View } from "react-native";
import React from "react";
import Card from "./Card";
import Features from "./Features";

export default function information() {
  return (
    <View style={styles.informationContainer}>
      <View>
        <Card />
        <Features />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  informationContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
});
