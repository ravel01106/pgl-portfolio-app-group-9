import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { colors } from "../assets/color/Color";
import { SkillListProps } from '../assets/interfaces/cardprops';

export default function SkillList(props:SkillListProps) {
  const {skillList} = props
  return (
    <View style={styles.skillContainer}>
    <Text style={[styles.skillTitle, styles.text]}> SKILLS </Text>
    <ScrollView style={styles.skillList}>
      {skillList.map((skill, index) => (
      <Text style={styles.text} key={index}>{skill}</Text>
      ))}
    </ScrollView>
  </View>
  )
}



const styles = StyleSheet.create({
    skillTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    text: {
        color: colors.text,
        paddingHorizontal: 20,
        paddingVertical: 5,
        textAlign: "center",
    },
    iconList: {
        alignSelf:"center",
        flexDirection: "row",
    },
    skillContainer:{
        alignItems: "center",
        marginBottom: 25,
    },
    skillList: {
        height: 150,
        width: 200,
        textAlign: "center"
    }
})