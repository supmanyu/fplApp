import React from "react";
import { StyleSheet, View, TextInput, SafeAreaView } from "react-native";

export function NumericInput({ placeholder, maxLength, onChangeText, value }) {
  return (
    <SafeAreaView>
      <TextInput
        keyboardType="numeric"
        onChangeText={onChangeText}
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
        style={styles.NumericInput}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  NumericInput: {
    height: 50,
    padding: 10,
    width: 300,
    borderColor: "#fff",
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
});
