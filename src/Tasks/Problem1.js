import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Problem1 = () => {
  const paraname = "Third Para: ";

  return (
    <View>
      <Text style={styles.textStyle}>First Para: Welcome</Text>
      <Text style={styles.textStyle1}>Second Para: Great to see you</Text>
      <Text style={styles.textStyle2}>{paraname} Lets grow together</Text>
    </View>
  );
};

export default Problem1;

const styles = StyleSheet.create({
  textStyle: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 40,
  },
  textStyle1: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 30,
  },
  textStyle2: {
    color: "olive",
    fontWeight: "bold",
    fontSize: 20,
  },
});
