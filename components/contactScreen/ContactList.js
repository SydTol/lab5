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
import { TouchableButton } from "../general/TouchableButton";
import { ContactFilter } from "./ContactFilter";


export const ContactList = (props) => {
  const [fetchedContacts, setFetchedContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [contactsLoaded, setContactsLoaded] = useState(false);


  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    setContactsLoaded(false);
    const response = await fetch("https://randomuser.me/api/?results=3");
    const contacts = await response.json();
    contacts.results.sort((a, b) => {
      if (a.name.first < b.name.first) return -1;
      else if (a.name.first >= b.name.first) return 1;
    });
    setFetchedContacts(contacts.results);
    setFilteredContacts(contacts.results);
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
        <ContactFilter
          fetContacts = {fetchedContacts}
          filterContactHandle={(filtContacts)=>{
            setFilteredContacts(filtContacts);
          }} 
        />

        <TouchableButton
          onPressButton={() => fetchContacts()}
          title={"Fetch Contacts"}
          style={props.selectedStyle.text}
        />

        <FlatList
          keyExtractor={(item, index) => index.toString()}
          
          data={filteredContacts}
          renderItem={({ item }) => {
            return (
              <View style={styles2.listItem}>
                <Text style={props.selectedStyle.text}>{item.name.first}</Text>
                {console.log(item.name.first)}
                <TouchableButton
                  onPressButton={() => props.onButtonPress(item)}
                  title={"More Info"}
                  style={props.selectedStyle.text}
                />
              </View>
            );
          }}
         
        />
        {console.log('__________')}
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
