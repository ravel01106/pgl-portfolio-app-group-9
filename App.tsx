import React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import { colors } from "./assets/color/Color";
import { CardData } from "./assets/interfaces/carddata";
import Card from "./components/Card";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  const dataAmanda:CardData = {
    title: "Amanda Ravelo Cabrera",
    description: "I am a full stack programmer who is very curious about new technologies.",
    background: require("./assets/images/fondo-amanda.jpg"),
    avatar: require("./assets/images/avatar.png"),
    skillList: ["TypeScript", "JavaScript", "Python", "Java", "MySQL", "PHP", "MongoDB", "CSS", "HTML"],
    qr:"github.com/ravel01106"
  }
  const dataVallejo:CardData = {
    title: "Alejandro Vallejo García",
    description: "I am a full stack programmer way worse than Amanda but still better than Ricardo.",
    background: require("./assets/images/fondo-alejandro.jpg"),
    avatar: require("./assets/images/avatar-alejandro.jpg"),
    skillList: ["TypeScript", "JavaScript", "HTML", "Python", "Java", "CSS", "MySQL", "Oracle", "Videogames"],
    qr: "github.com/AleVallejoGarcia"
  }
  return (
    <View style={styles.container}>
      <Header setDisplayMyQR={setDisplayMyQR} />
      <View style={styles.informationContainer}>
      {displayMyQR ?  <Card data={dataAmanda}/> : <Card data={dataVallejo}/> }

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  informationContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
    backgroundColor: colors.background,
  },
});
