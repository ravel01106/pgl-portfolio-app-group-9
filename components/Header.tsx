import { StyleSheet, Text, View, Pressable, Switch } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors, colorsDark } from "../assets/color/Color";
import { HeaderProps } from "../assets/interfaces/HeaderProps";

export default function Header(props: HeaderProps) {
  const { setDisplayPortfolioAmanda, setIsEnabled, isEnabled } = props;
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  const handleChange = (election: boolean): void => {
    setDisplayPortfolioAmanda(election);
  };

  return (
    <View
      style={[
        styles.container,
        isEnabled
          ? { backgroundColor: colors.primary }
          : { backgroundColor: colorsDark.primary },
      ]}
    >
      <View style={styles.containerTitle}>
        <Text style={styles.title}>My Portfolio App</Text>
        <View style={styles.containerSwitch}>
          <Ionicons
            name={isEnabled ? "moon-sharp" : "sunny"}
            size={24}
            color={colors.text}
          />
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          ></Switch>
        </View>
      </View>
      <View style={styles.navbar}>
        <Pressable
          onPress={() => handleChange(true)}
          style={[
            styles.buttonStyles,
            isEnabled
              ? { backgroundColor: colors.secondary }
              : { backgroundColor: colorsDark.secondary },
          ]}
        >
          <Text style={styles.buttonsText}>PORTAFOLIO AMANDA</Text>
        </Pressable>
        <Pressable
          onPress={() => handleChange(false)}
          style={[
            styles.buttonStyles,
            isEnabled
              ? { backgroundColor: colors.secondary }
              : { backgroundColor: colorsDark.secondary },
          ]}
        >
          <Text style={styles.buttonsText}>PORTAFOLIO VALLEJO</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "22%",
    paddingTop: 50,
    width: "100%",
    color: colors.text,
  },
  containerSwitch: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  containerTitle: {
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonStyles: {
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
