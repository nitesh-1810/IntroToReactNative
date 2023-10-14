import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

const FormDemo = () => {
  const [selectedValue, setSelectedValue] = useState(
    "Please Select Your Country"
  );
  const [selectedCode, setSelectedCode] = useState("Country Code");
  return (
    <>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Form</Text>
      </View>
      <View style={styles.inputViewStyle}>
        <Text>User Name</Text>
        <TextInput
          placeholder="user name"
          value="John Wick"
          style={styles.userInputStyle}
        />
        <Text>User Password</Text>
        <TextInput
          placeholder="user password"
          value="*******"
          style={styles.userInputStyle}
        />
        <Text>Gender</Text>
        <View style={{ flexDirection: "row" }}>
          <TextInput placeholder="male" value="" style={styles.genderInput} />
          <Text>Male</Text>
          <TextInput placeholder="Female" value="" style={styles.genderInput} />
          <Text>Female</Text>
          <TextInput placeholder="Other" value="" style={styles.genderInput} />
          <Text>Other</Text>
        </View>
        <Text>Country </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#2a6592",
            height: 50,
            justifyContent: "center",
          }}
        >
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
            <Picker.Item label="Aus" value="Aus" />
          </Picker>
        </View>
        <Text>Phone No. </Text>
        <View style={{ flexDirection: "row", height: 50 }}>
          <View
            style={{
              borderWidth: 1,
              borderColor: "green",
              marginRight: 5,
              justifyContent: "center",
            }}
          >
            <Picker
              selectedValue={selectedCode}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedCode(itemValue)
              }
              style={styles.codePickerStyle}
            >
              <Picker.Item label="+" value="" />
              <Picker.Item label="IN" value="+91" />
              <Picker.Item label="US" value="+56" />
              <Picker.Item label="UK" value="+44" />
            </Picker>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "green",
              flex: 2,
              justifyContent: "center",
              padding: 7,
            }}
          >
            <TextInput placeholder="Phnoe Number" label="Ph no." value="" />
          </View>
        </View>
      </View>
    </>
  );
};

export default FormDemo;

const styles = StyleSheet.create({
  viewStyle: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderColor: "red",
  },
  textStyle: {
    fontSize: 30,
    textAlign: "center",
  },
  inputViewStyle: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderColor: "green",
    padding: 10,
  },
  userInputStyle: {
    borderWidth: 0.5,
    borderColor: "blue",
    color: "white",
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
  genderInput: {
    borderWidth: 0.5,
    borderColor: "blue",
    color: "white",
    margin: 5,
    padding: 10,
    borderRadius: 50,
    width: 6,
    height: 6,
  },
  pickerStyle: {
    borderWidth: 1,
    borderColor: "red",
  },
  codePickerStyle: {
    width: 100,
  },
});
