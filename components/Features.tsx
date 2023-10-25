import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

export default function Features() {
  const features = [
    "Salir a pasear",
    "Senderismo",
    "Ir a la playita",
    "Domingos de misa",
    "La guitarrita",
    "El monte con lluvia",
    "Viajar",
    "Música variadita",
    "Anime",
    "Ducharme",
    "Videojuegos",
    "Ir de cenar romántica",
  ];
  return (
    <View>
      <Text style={styles.title}>cosas que me gustan mucho:</Text>
      <View style={styles.scrollviewContainer}>
        <ScrollView style={styles.containerFeatures}>
          {features.map((feature, index) => (
            <Text key={index} style={styles.feature}>
              {feature}
            </Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  feature: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: "darkred",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "silver",
  },
  title: {
    color: "black",
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
  containerFeatures: {
    padding: 10,
    flex: 2,
  },
  scrollviewContainer: {
    height: "82%",
  },
});
