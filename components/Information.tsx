import { StyleSheet, View } from 'react-native'
import React from 'react'
import Card from './Card'
import Features from './Features'

export default function information() {
  return (
    <View style={styles.bodystails}>
      <View>
        <Card/>
        <Features/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bodystails: {
    width: '100%',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '85%'
  }})