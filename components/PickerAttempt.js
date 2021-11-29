import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Modal,
} from "react-native";
import { textFormatting } from "../styles/Texts";

export const PickerAttempt = (props) => {
  return (
    <Modal visible={true} animationType={"slide"} transparent={true}>
      <View
        style={{
          margin: 20, 
          padding: 20,
          backgroundColor: "#efefef",
          bottom: 20,
          left: 20,
          right: 20,
          alignItems: "center",
          position: "absolute",
        }}
      >
        <Text>Please pick a value</Text>
        {pickerValues.map((value, index) => {
          return (
            <TouchableHighlight
              key={index}
              onPress={(newFilter) => setSelectedFilter(newFilter)}
              style={{ paddingTop: 4, paddingBottom: 4 }}
            >
              <Text>{value.title}</Text>
            </TouchableHighlight>
          );
        })}
        <TouchableHighlight
          onPress={() => togglePicker()}
          style={{ paddingTop: 4, paddingBottom: 4 }}
        >
          <Text style={{ color: "#999" }}>Cancel</Text>
        </TouchableHighlight>
      </View>
    </Modal>
  );
};
