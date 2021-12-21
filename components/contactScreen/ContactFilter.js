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

export const ContactFilter = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("");

  useEffect(() => {
    props.filterContactHandle(
      props.fetContacts.filter((contact) => filterContact(contact))
    );
    console.log(selectedFilter)
  }, [selectedFilter]);

  const filterContact = (contact) => {
    switch (selectedFilter) {
      case "No filter":
        return true;

      case "First names that contain the letter 'a'":
        if (contact.name.first.includes("a")) {
          return true;
        } else {
          return false;
        }
      case "Older than 50":
        if (contact.dob.age > 50) {
          return true;
        } else {
          return false;
        }

      default:
        return true;
    }
  };

  const filterContactList = (newFilter) => {
    
    setSelectedFilter(newFilter);
   

  };

  const filters = [
    "No filter",
    "First names that contain the letter 'a'",
    "Older than 50",
  ];

  return (
    <View style={styles2.container}>
      <Picker
        style={{ width: 325, height: 50 }}
        selectedValue={selectedFilter}
        onValueChange={(newFilter) => filterContactList(newFilter)}
        textStyle={{ fontSize: 20, color: "blue" }}
      >
        {filters.map((item, index) => {
          return <Picker.Item key={index} label={item} value={item} />;
        })}
      </Picker>
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
