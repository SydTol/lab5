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
import { getStyleSheet } from "../styles/Texts";

export const ContactsScreen = (props) => {
  const [fetchedContacts, setFetchedContacts] = useState([]);
  const [contactsLoaded, setContactsLoaded] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [textSize, setTextSize] = useState("medium");

  const styles = getStyleSheet(textSize);
  const filters = [
    "No filter",
    "First names that contain the letter 'a'",
    "Older than 50",
  ];

  useEffect(() => {
    fetchContacts();
  }, []);
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
  const onButtonPress = (contact) => {
    props.navigation.navigate("ViewDetailsScreen", {
      contactObject: contact,
      textSizeSelected: textSize,
    });
  };
  const fetchContacts = async () => {
    const response = await fetch("https://randomuser.me/api/?results=20");
    const contacts = await response.json();
    contacts.results.sort((a, b) => {
      if (a.name.first < b.name.first) return -1;
      else if (a.name.first >= b.name.first) return 1;
    });
    setFetchedContacts(contacts.results);
    setContactsLoaded(true);
  };

  if (contactsLoaded === false) {
    return (
      <View style={styles2.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  } else {
    return (
      <View style={styles2.container}>
        <Picker
          style={{ width: 325, height: 50 }}
          selectedValue={selectedFilter}
          onValueChange={(newFilter) => setSelectedFilter(newFilter)}
          textStyle={{ fontSize: 20, color: "blue" }}
        >
          {filters.map((item, index) => {
            return <Picker.Item key={index} label={item} value={item} />;
          })}
        </Picker>
        
        <TouchableOpacity
          style={styles2.buttonOp}
          onPress={() => fetchContacts()}
        >
          <Text style={styles.text}>Fetch Contacts</Text>
        </TouchableOpacity>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={fetchedContacts.filter((contact) => filterContact(contact))}
          renderItem={({ item }) => {
            return (
              <View style={styles2.listItem}>
                <Text style={styles.text}>{item.name.first}</Text>
                <TouchableOpacity
                  style={styles2.buttonOp}
                  onPress={() => onButtonPress(item)}
                >
                  <Text style={styles.text}>More Info</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <Text>Text size:</Text>
        <View style={styles2.container}>
          <TextSizeBanner onButtonPress={(textSize) => setTextSize(textSize)} />
        </View>
      </View>
    );
  }
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
