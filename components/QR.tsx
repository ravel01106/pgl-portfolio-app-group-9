import { StyleSheet, View } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg';

export default function QR() {
  return (
    <View style={styles.bodystails}>
        <View style={styles.CentrarcodigoQR}>
            <QRCode value="https://github.com/adhernea" />
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
    },
    CentrarcodigoQR: {
        justifyContent: 'center',
        borderWidth: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
})