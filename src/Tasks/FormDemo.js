import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";

const FormDemo = () => {
  const [selectedValue, setSelectedValue] = useState(
    "Please Select Your Country"
  );
  const [selectedCode, setSelectedCode] = useState("");

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPhone, setUserPhone] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>User Details Form</Text>
      <View style={styles.inputViewStyle}>
        <View style={styles.viewBox}>
          <Text>User Name</Text>
          <TextInput
            placeholder="User name"
            value={userName}
            style={styles.userInputStyle}
            onChangeText={(text) => setUserName(text)}
          />
        </View>
        <View style={styles.viewBox}>
          <Text>User Password</Text>
          <TextInput
            placeholder="Enter password"
            value={userPassword}
            style={styles.userInputStyle}
            onChangeText={(text) => setUserPassword(text)}
          />
        </View>
        <View style={styles.viewBox}>
          <Text>Gender</Text>
          <View style={styles.genderView}>
            <TextInput placeholder="male" value="" style={styles.genderInput} />
            <Text>Male</Text>
            <TextInput
              placeholder="Female"
              value=""
              style={styles.genderInput}
            />
            <Text>Female</Text>
            <TextInput
              placeholder="Other"
              value=""
              style={styles.genderInput}
            />
            <Text>Other</Text>
          </View>
        </View>
        <View style={styles.viewBox}>
          <Text>Country </Text>
          <View style={styles.countryView}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
              style={styles.pickerStyle}
            >
              <Picker.Item label="Please Select Your Country" value="" />
              <Picker.Item label="India" value="India" />
              <Picker.Item label="England" value="England" />
              <Picker.Item label="Spain" value="Spain" />
              <Picker.Item label="United States" value="United States" />
              <Picker.Item label="Australia" value="Australia" />
            </Picker>
          </View>
        </View>
        <View style={styles.viewBox}>
          <Text>Phone No. </Text>
          <View style={styles.phoneView}>
            <View style={styles.codeView}>
              <Picker
                selectedValue={selectedCode}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedCode(itemValue)
                }
                style={styles.codePickerStyle}
              >
                <Picker.Item label="+" value="" />
                <Picker.Item label="IN" value="+91" />
                <Picker.Item label="US" value="+6" />
                <Picker.Item label="UK" value="+44" />
                <Picker.Item label="BR" value="+55" />
                <Picker.Item label="AUS" value="+61" />
              </Picker>
            </View>
            <View style={styles.phoneNumView}>
              <TextInput
                placeholder="Phone Number"
                label="Ph no."
                value={userPhone}
                onChangeText={(text) => setUserPhone(text)}
              />
            </View>
          </View>
        </View>
        <View style={styles.viewBox}>
          <Button
            color="green"
            title="Sign Up"
            onPress={() => {
              Alert.alert(
                `Name: ${userName}, PassWord: ${userPassword}, Country: ${selectedValue}, Phone no: ${selectedCode} ${userPhone}`
              );
              setSelectedValue("");
              setUserName("");
              setUserPassword("");
              setSelectedCode("");
              setUserPhone("");
              setUserPhone("");
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default FormDemo;

const styles = StyleSheet.create({
  container: { backgroundColor: "#4747d1", height: "100%" },
  viewBox: { marginBottom: 10, marginTop: 10 },
  textStyle: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 65,
    color: "white",
  },
  inputViewStyle: {
    backgroundColor: "white",
    marginTop: 50,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 50,
    borderRadius: 16,
    padding: 23,
    paddingBottom: 40,
  },
  userInputStyle: {
    borderWidth: 0.5,
    borderColor: "blue",
    // color: "white",
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
  genderView: { flexDirection: "row", alignItems: "center" },
  genderInput: {
    borderWidth: 0.5,
    borderColor: "blue",
    // color: "white",
    margin: 5,
    padding: 10,
    borderRadius: 50,
    width: 6,
    height: 6,
  },
  countryView: {
    borderWidth: 1,
    borderColor: "#2a6592",
    height: 50,
    justifyContent: "center",
  },
  codePickerStyle: {
    width: 100,
  },
  phoneView: { flexDirection: "row", height: 50 },
  codeView: {
    borderWidth: 1,
    borderColor: "green",
    marginRight: 5,
    justifyContent: "center",
    borderRadius: 5,
  },
  phoneNumView: {
    borderWidth: 1,
    borderColor: "green",
    flex: 2,
    justifyContent: "center",
    padding: 7,
    borderRadius: 5,
  },
});
