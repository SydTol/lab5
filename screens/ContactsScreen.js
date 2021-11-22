import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  FlatList,
  Picker,
} from "react-native";
// import { contactList } from "../data/contacts";

export const ContactsScreen = (props) => {
  const [fetchedContacts, setFetchedContacts] = useState([]);
  const [contactsLoaded, setContactsLoaded] = useState(false);

  const filters = [
    "No filter",
    "First names that contain the letter 'a'",
    "Older than 50",
  ];

  useEffect(() => {
    fetchContacts();
  }, []);

  const onButtonPress = (contact) => {
    props.navigation.navigate("ViewDetailsScreen", {
      contactObject: contact,
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
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Button title="Fetch Contacts" onPress={() => fetchContacts()} />
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={fetchedContacts}
          renderItem={({ item }) => {
            return (
              <View style={styles.listItem}>
                <Text>{item.name.first}</Text>
                <Button title="more info" onPress={() => onButtonPress(item)} />
              </View>
            );
          }}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
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
});
