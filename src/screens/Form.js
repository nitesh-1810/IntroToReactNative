import React from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

const Form = () => {
  return (
    <View>
      <Text>First Name </Text>
      <TextInput label="user firstname" value="John" />
      <Text>Second Name </Text>
      <TextInput label="user surname" value="Wick" />
      <Text>Password</Text>
      <TextInput label="user password" value="*****" />
      <Text>Gender:</Text>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  textStyle: {},
});
