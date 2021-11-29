import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { getStyleSheet } from "../styles/Texts";

export const ViewDetailsScreen = (props) => {
  const contact = props.route.params.contactObject;
  const textSize = props.route.params.textSizeSelected;
  const styles = getStyleSheet(textSize);
  return (
    <View style={styles2.container}>
      <Image
        style={{ height: 200, width: 200 }}
        source={{ uri: contact.picture.large }}
      />
      <Text style={styles.text}>Title: {contact.name.title}</Text>
      <Text style={styles.text}>First name: {contact.name.first}</Text>
      <Text style={styles.text}>Last name: {contact.name.last}</Text>
      <Text style={styles.text}>Age: {contact.dob.age}</Text>
    </View>
  );
};

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
