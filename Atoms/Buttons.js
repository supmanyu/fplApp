import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";

export default DefaultButton = ({
  text,
  width,
  backgroundDarker,
  backgroundColor,
  backgroundShadow,
  raiseLevel,
  onPress,
  backgroundPlaceholder,
  progress,
}) => {
  return (
    <AwesomeButton
      width={width}
      onPress={onPress}
      backgroundDarker={backgroundDarker}
      backgroundColor={backgroundColor}
      backgroundShadow={backgroundShadow}
      raiseLevel={raiseLevel}
      backgroundPlaceholder={backgroundPlaceholder}
      progress={progress ? true : false}
    >
      {text}
    </AwesomeButton>
  );
};
