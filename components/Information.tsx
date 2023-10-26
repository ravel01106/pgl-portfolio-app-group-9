import { StyleSheet, View } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../assets/color/Color";

export default function information() {
  return (
    <View style={styles.informationContainer}>
      <View>
        <Card />
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
    backgroundColor: colors.background,
  },
});
