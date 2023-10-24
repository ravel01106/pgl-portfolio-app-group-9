import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Card() {
  return (
    
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image style={styles.avatar} source={require('../assets/SofyanAmrabat.jpg')}></Image>
        <View style={{margin: 10, backgroundColor: 'lightgray', padding: 10, borderRadius: 10, width: '70%'}}>
            <Text style={{textAlign:'center', fontWeight: '700', fontSize: 20}}>
                Descripción sobre mí!
            </Text>
            <Text>
                Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar prácticas para mis queridos alumnos
            </Text>
        </View>
    </View>
   
  )
}

const styles = StyleSheet.create({
    avatar: {
        height: 90,
        width: 90,
        borderRadius: 100
      },
})