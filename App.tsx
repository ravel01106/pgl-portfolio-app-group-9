import React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import { colors, colorsDark } from "./assets/color/Color";
import { CardData } from "./assets/interfaces/CardData";
import Card from "./components/Card";

export default function App() {
  const [displayPortfolioAmanda, setDisplayPortfolioAmanda] = useState(true);
  const [isEnabled, setIsEnabled] = useState(true);

  const dataAmanda: CardData = {
    title: "Amanda Ravelo Cabrera",
    description:
      "I am a full stack programmer who is very curious about new technologies.",
    background: require("./assets/images/fondo-amanda.jpg"),
    avatar: require("./assets/images/avatar.png"),
    skillList: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "MySQL",
      "PHP",
      "MongoDB",
      "CSS",
      "HTML",
    ],
    qr: "github.com/ravel01106",
  };
  const dataVallejo: CardData = {
    title: "Alejandro Vallejo García",
    description:
      "I am a full stack programmer way worse than Amanda but still better than Ricardo.",
    background: require("./assets/images/fondo-alejandro.jpg"),
    avatar: require("./assets/images/avatar-alejandro.jpg"),
    skillList: [
      "TypeScript",
      "JavaScript",
      "HTML",
      "Python",
      "Java",
      "CSS",
      "MySQL",
      "Oracle",
      "Videogames",
    ],
    qr: "github.com/AleVallejoGarcia",
  };
  return (
    <View style={styles.container}>
      <Header setDisplayPortfolioAmanda={setDisplayPortfolioAmanda} setIsEnabled={setIsEnabled} isEnabled={isEnabled}/>
      <View style={[styles.informationContainer , isEnabled ? {backgroundColor: colors.background} : {backgroundColor: colorsDark.background}]}>
        {displayPortfolioAmanda ? (
          <Card data={dataAmanda} isEnabled={isEnabled}/>
        ) : (
          <Card data={dataVallejo} isEnabled={isEnabled}/>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  informationContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
});
