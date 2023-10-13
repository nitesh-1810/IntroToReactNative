import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const FlatListDemo = () => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28baa2",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f6332",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d7222",
      title: "Third Item",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f631",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d721",
      title: "Third Item",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28baa1",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f6331",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d7221",
      title: "Third Item",
    },
  ];
  return (
    <FlatList
      data={DATA}
      renderItem={(el) => {
        //console.log(el);
        return <Text style={styles.textStyle}>{el.item.title}</Text>;
      }}
      keyExtractor={(el) => {
        //console.log(el);
        return el.id;
      }}
      //horizontal
      numColumns={2}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default FlatListDemo;

const styles = StyleSheet.create({
  textStyle: {
    borderRadius: 5,
    margin: 5,
    padding: 5,
    height: 40,
    backgroundColor: "pink",
    //width: 360,
  },
});
