import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export const ViewDetailsScreen = (props) => {
  const contact = props.route.params.contactObject;
  return (
    <View style={styles.container}>
      <Image
        style={{ height: 200, width: 200 }}
        source={{ uri: contact.picture.large }}
      />
      <Text>Title: {contact.name.title}</Text>
      <Text>First name: {contact.name.first}</Text>
      <Text>Last name: {contact.name.last}</Text>
      <Text>Age: {contact.dob.age}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
