import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { colors } from "../assets/color/Color";
import { HeaderProps } from "../assets/interfaces/headerprops";

export default function Header(props: HeaderProps) {
  const { setDisplayPortfolioAmanda } = props;

  const handleChange = (election: boolean): void => {
    setDisplayPortfolioAmanda(election);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>My Portfolio App</Text>
      </View>
      <View style={styles.navbar}>
        <Pressable
          onPress={() => handleChange(true)}
          style={styles.buttonStyles}
        >
          <Text style={styles.buttonsText}>PORTAFOLIO AMANDA</Text>
        </Pressable>
        <Pressable
          onPress={() => handleChange(false)}
          style={styles.buttonStyles}
        >
          <Text style={styles.buttonsText}>PORTAFOLIO VALLEJO</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: "20%",
    paddingTop: 50,
    width: "100%",
    color: colors.text,
  },

  containerTitle: {
    marginVertical: 15,
  },

  buttonStyles: {
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 10,
  },

  buttonsText: {
    color: colors.text,
    fontWeight: "bold",
  },

  title: {
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
    color: colors.text,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
