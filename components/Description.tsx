import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { colors, colorsDark } from "../assets/color/Color";
import { DescriptionProps } from "../assets/interfaces/CardProps";
import QRCode from "react-native-qrcode-svg";

export default function Description(props: DescriptionProps) {
  const { title, description, qr, isEnabled } = props;
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.infoContainer}>
      <Text style={[styles.cardTitle, styles.text]}>{title}</Text>
      <Text style={styles.text}>{description}</Text>
      <Text style={styles.line} />
      <View style={[styles.infoContainer, styles.iconList]}>
        <Entypo
          name="linkedin"
          size={24}
          color={colors.text}
          style={styles.icon}
        />
        <AntDesign
          name="github"
          size={24}
          color={colors.text}
          style={styles.icon}
          onPress={() => setModalVisible(true)}
        />
        <AntDesign
          name="twitter"
          size={24}
          color={colors.text}
          style={styles.icon}
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <QRCode value={qr} size={200} />
          <TouchableOpacity
            style={[
              styles.closeButton,
              isEnabled
                ? { backgroundColor: colors.primary }
                : { backgroundColor: colorsDark.primary },
            ]}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    marginTop: 25,
    marginBottom: 15,
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
  iconList: {
    alignSelf: "center",
    flexDirection: "row",
  },
  icon: {
    marginHorizontal: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  closeButtonText: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "bold",
  },
});
