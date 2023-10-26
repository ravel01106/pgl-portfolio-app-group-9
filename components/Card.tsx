import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors } from "../assets/color/Color";
import { AntDesign, Entypo } from '@expo/vector-icons'; 
import { CardProps } from "../assets/interfaces/cardprops";

export default function Card() {
  const [displayMyInfo, setDisplayMyInfo] = useState(true)
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
      source={require("../assets/images/fondo-amanda.jpg")}
      style={styles.imageContainer}
      >
        <Image style={styles.avatar} source={require("../assets/images/avatar.png")}/>
      </ImageBackground>

      {
        displayMyInfo ? (
            <View style={styles.infoContainer}>
              <Text style={[styles.cardTitle, styles.text]}>Amanda Ravelo Cabrera</Text>
              <Text style={styles.text}>I am a Full Stack Development and an Open Source lover from Spain </Text>
              <Text style={styles.line}/>
              <View style={[styles.infoContainer, styles.iconsStyles]}>
                <AntDesign name="github" size={24} color={colors.text} style={styles.icon}/>
                <Entypo name="linkedin" size={24} color={colors.text} style={styles.icon}/>
                <AntDesign name="twitter" size={24} color={colors.text} style={styles.icon}/>
              </View>
            </View>
        ) : (
          <View style={styles.skill}>
            <Text style={[styles.cardTitle, styles.text]}> SKILLS</Text>
            <ScrollView style={styles.skillsScroll}>
              <Text style={styles.text}>JS</Text>
              <Text style={styles.text}>Python</Text>
              <Text style={styles.text}>TS</Text>
              <Text style={styles.text}>Java</Text>
              <Text style={styles.text}>MySQL</Text>
              <Text style={styles.text}>MongoDB</Text>
              <Text style={styles.text}>PHP</Text>
            </ScrollView>
          </View>
        )
      }
      <View style={styles.iconsStyles}>
        <AntDesign name= {displayMyInfo ? "arrowdown" : "arrowup"}
          size={24} 
          color={colors.text} 
          onPress={() => setDisplayMyInfo(!displayMyInfo)}/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex:1,
    width: 270,
    marginVertical: 160,
    backgroundColor: colors.backgroundCard,
    borderRadius: 20,
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 100,
  },
  imageContainer: {
    paddingTop: 10,
    height: 100,
    alignItems: "center",
    marginBottom: 15,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: "hidden",
  },
  cardContent: {
    margin: 10,
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    color: colors.text,
    paddingHorizontal: 20,
    paddingVertical: 5,
    textAlign: "center",
  },
  line: {
    borderColor: "#ddd",
    borderBottomWidth: 0.5,
    marginHorizontal: 8,
    
  },
  infoContainer: {
    marginTop: 25,
    marginBottom: 15,
  },
  iconsStyles: {
    alignSelf:"center",
    flexDirection: "row",
  },
  icon: {
    marginHorizontal: 20
  },
  skill:{
    alignItems: "center",
    marginBottom: 25,
  },
  skillsScroll: {
    height: 150,
    width: 200,
    textAlign: "center"
  }
});
