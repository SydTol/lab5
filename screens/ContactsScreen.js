import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  FlatList,
  Picker,
  TouchableOpacity,
  Modal,
} from "react-native";
import { TextSizeBanner } from "../components/TextSizeBanner";

import { ContactList } from "../components/contactScreen/ContactList";
import { getStyleSheet } from "../styles/Texts";

export const ContactsScreen = (props) => {
  const [textSize, setTextSize] = useState("medium");

  const styles = getStyleSheet(textSize);
  const navigationHandler = (contact) => {
    props.navigation.navigate("ViewDetailsScreen", {
      contactObject: contact,
      textSizeSelected: textSize,
    });
  };
  return (
    <View style={styles2.container}>
      <View style={styles2.container}>
        <ContactList
          selectedStyle={styles}
          onButtonPress={(contact) => navigationHandler(contact)}
        />
      </View>
      <Text>Text size:</Text>
      <View style={styles2.container2}>
        <TextSizeBanner onButtonPress={(textSize) => setTextSize(textSize)} />
      </View>
    </View>
  );
};

const styles2 = StyleSheet.create({
  container2: {
    flex: 0.1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  listItem: {
    flexDirection: "row",
    width: 250,
    justifyContent: "space-between",
    padding: 2,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 2,
  },
  buttonOp: {
    height: 30,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
