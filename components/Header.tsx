import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { colors } from "../assets/color/Color";
interface HeaderProps {
  setDisplayMyQR: Function;
}

export default function Header(props: HeaderProps) {
  const { setDisplayMyQR } = props;

  const handleChange = (election: boolean): void => {
    setDisplayMyQR(election);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>My Portfolio App</Text>
      </View>
      <View style={styles.navbar}>
        <Pressable onPress={() => handleChange(true)} style = {styles.buttonStyles}> 
          <Text style = {styles.buttonsText}>
            MI INFO
          </Text>
        </Pressable>
        <Pressable onPress={() => handleChange(false)} style = {styles.buttonStyles}>
          <Text style = {styles.buttonsText}>
            MI REPO
          </Text>
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
    color: colors.text
  },

  containerTitle: {
    marginVertical: 15,
  },

  buttonStyles: {
    backgroundColor: colors.ternary,
    padding: 10,
    borderRadius: 10,
  },

  buttonsText: {
    color: colors.text,
    fontWeight: 'bold'
  },

  title: {
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
    color: colors.text
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
