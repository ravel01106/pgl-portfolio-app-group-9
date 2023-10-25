import { StyleSheet, View } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg';

export default function QR() {
  return (
    <View style={styles.qrContainer}>
        <QRCode value="https://github.com/adhernea" />
    </View>
  )
}


const styles = StyleSheet.create({
    qrContainer: {
        width: '100%',
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        height: '85%'
    }
})