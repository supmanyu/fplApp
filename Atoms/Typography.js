import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const HeaderText = ({ children }) => {
  return <Text style={styles.textHeader}>{children}</Text>;
};

export const SubText = ({ children }) => {
  return <Text style={styles.textSubHeader}>{children}</Text>;
};

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 35,
    color: "white",
    textAlign: "center",
    marginBottom: 10,
    width: 200,
  },
  textSubHeader: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
    marginBottom: 10,
    width: 300,
  },
});
