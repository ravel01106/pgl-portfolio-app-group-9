import { StyleSheet, View } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../assets/color/Color";
import { CardData } from "../assets/interfaces/carddata";

export default function information() {
  const dataAmanda:CardData = {
    title: "Amanda Ravelo Cabrera",
    description: "I am a full stack programmer who is very curious about new technologies.",
    background: require("../assets/images/fondo-amanda.jpg"),
    avatar: require("../assets/images/avatar.png"),
    skillList: ["TypeScript", "JavaScript", "Python", "Java", "MySQL", "PHP", "MongoDB", "C"]
  }
  return (
    <View style={styles.informationContainer}>
      <Card 
      data={dataAmanda}
      />
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
