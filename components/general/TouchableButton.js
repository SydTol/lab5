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
} from "react-native";

export const TouchableButton = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={styles2.buttonOp}
        onPress={() => props.onPressButton()}
      >
        <Text style={props.style}>{props.title}</Text>
      </TouchableOpacity>
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
