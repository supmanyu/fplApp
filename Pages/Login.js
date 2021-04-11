import React from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "react-native-axios";

//Atomic Components
import { FullPageContainer } from "../Templates/Container";
import { HeaderText, SubText } from "../Atoms/Typography";
import DefaultButton from "../Atoms/Buttons";
import { NumericInput } from "../Atoms/Inputs";

const loginUser = async (userId) => {
  const userData = await axios
    .get("https://fantasy.premierleague.com/api/entry/3138544/history/")
    .then((res) => {
      console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    });
  console.log(userData);
  return userData;
};

export default LoginScreen = ({ navigation }) => {
  const [userIdInput, onChangeId] = React.useState(null);
  return (
    <FullPageContainer bg={"#28b5b5"}>
      <SubText>Connect FPL Team</SubText>
      <NumericInput
        placeholder={"Enter Your FPL Team ID"}
        maxLength={10}
        onChangeText={onChangeId}
        value={userIdInput}
      />
      <DefaultButton
        width={200}
        backgroundDarker="#64477C"
        backgroundColor="#3D195B"
        backgroundShadow="#64477C"
        raiseLevel={2}
        backgroundPlaceholder="#3D195B"
        text={"Connect FPL Team"}
        progress={true}
        onPress={(next) => {
          loginUser(userIdInput);
          next();
        }}
      />
    </FullPageContainer>
  );
};
