import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const FullPageContainer = ({ children, bg }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
        padding: 10,
        backgroundColor: bg,
      }}
    >
      {children}
    </View>
  );
};
