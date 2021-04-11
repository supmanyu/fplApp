import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { StatusBar } from "expo-status-bar";

//Atomic Components
import { FullPageContainer } from "../Templates/Container";
import DefaultButton from "../Atoms/Buttons";
import { HeaderText, SubText } from "../Atoms/Typography";

export default SplashScreen = ({ navigation }) => {
  return (
    <FullPageContainer bg={"#8fd9a8"}>
      <View style={styles.iconHeader}>
        <Icon name="soccer-field" color="#fff" size={100} />
      </View>
      <HeaderText>FPL App</HeaderText>
      <SubText>Connect your FPL Team to begin</SubText>
      <DefaultButton
        width={200}
        backgroundDarker="#64477C"
        backgroundColor="#3D195B"
        backgroundShadow="#64477C"
        raiseLevel={2}
        backgroundPlaceholder="#3D195B"
        text={"Let's Go"}
        onPress={() => navigation.navigate("Login")}
      />
    </FullPageContainer>
  );
};

const styles = StyleSheet.create({
  iconHeader: {
    textAlign: "center",
  },
});
