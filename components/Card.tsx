import { StyleSheet, View, ImageBackground, Image} from "react-native";
import React, { useState } from "react";
import { colors } from "../assets/color/Color";
import Description from "./Description";
import SkillList from "./SkillList";
import ArrowSelection from "./ArrowSelection";
import FrontCard from "./FrontCard";
import { CardProps } from "../assets/interfaces/cardprops";

export default function Card(props:CardProps) {
  const {data} = props
    const {title, description, background, avatar, skillList, qr} = data
  const [displayMyInfo, setDisplayMyInfo] = useState(true)
  return (
    <View style={styles.cardContainer}>
      <FrontCard background={background} avatar={avatar}/>
      { displayMyInfo ? 
        ( 
          <Description title={title} description={description} qr={qr}/> 
        ) : ( 
          <SkillList skillList={skillList}/> 
        )
      }
      <ArrowSelection displayMyInfo={displayMyInfo} setDisplayMyInfo={setDisplayMyInfo}/>

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
});
