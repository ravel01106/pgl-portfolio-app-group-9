import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import React from "react";

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
      <Text style={styles.title}>My Portfolio App</Text>
      <View style={styles.navbar}>
        <Button
          color="light-gray"
          title="Mi info"
          onPress={() => handleChange(true)}
          accessibilityLabel="Un botón para acceder a mi información"
        />
        <Button
          onPress={() => handleChange(false)}
          title="Mi Repo"
          color="light-gray"
          accessibilityLabel="Un botón para acceder QR"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "15%",
    paddingTop: 50,
    width: "100%",
  },
  title: {
    backgroundColor: "gray",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  navbar: {
    flexDirection: "row",
    backgroundColor: "darkgray",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
