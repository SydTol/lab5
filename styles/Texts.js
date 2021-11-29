import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";

const smallText = StyleSheet.create({
  text: {
    fontSize: 10,
  },
});
const mediumText = StyleSheet.create({
  text: {
    fontSize: 15,
  },
});
const largeText = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export const textFormatting = StyleSheet.create({
  textSizeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 1,
  },
  textSizeButton: {
    flex: 1,
    padding:10,
  },
  smallText:{
    fontSize:10
  },
  mediumText:{
    fontSize:20
  },
  largeText:{
    fontSize:30
  },
})

export const getStyleSheet =(textSize)=>{
  if(textSize==="small"){
    return smallText;
  }
  if(textSize==="medium"){
    return mediumText;
  }
  if(textSize==="large"){
    return largeText;
  }

}
