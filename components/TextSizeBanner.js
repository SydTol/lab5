import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { textFormatting } from "../styles/Texts";

// import { contactList } from "../data/contacts";

export const TextSizeBanner = (props) => {
  

  return (
    <View style={styles.container}>
      <View style={textFormatting.textSizeContainer}>
        <View style={textFormatting.textSizeButton}>
          <TouchableOpacity
            style={styles.buttonOp}
            onPress={() => props.onButtonPress("small")}
          >
            <Text style={textFormatting.smallText}>Small</Text>
          </TouchableOpacity>
        </View>
        <View style={textFormatting.textSizeButton}>
          <TouchableOpacity
            style={styles.buttonOp}
            onPress={() => props.onButtonPress("medium")}
          >
            <Text style={textFormatting.mediumText}>Medium</Text>
          </TouchableOpacity>
        </View>
        <View style={textFormatting.textSizeButton}>
          <TouchableOpacity
            style={styles.buttonOp}
            onPress={() => props.onButtonPress("large")}
          >
            <Text style={textFormatting.largeText}>Large</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
// https://stackoverflow.com/questions/33628677/react-native-responsive-font-size
// Maybe try out this instead. Write about this though!

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    color: "black",
  },
  buttonOp: {
    height: 40,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
