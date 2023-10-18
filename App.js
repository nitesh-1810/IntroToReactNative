//import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar, // Auto adjust status bar of phone
} from "react-native";
import Home from "./src/screens/Home";
import Form from "./src/screens/Form";
import Problem1 from "./src/screens/Problem1";
import FlatListDemo from "./src/screens/FlatListDemo";
import FormDemo from "./src/Tasks/FormDemo";

export default function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <FormDemo />
      </ScrollView>
    </SafeAreaView>
    // <View style={styles.container}>
    //   <Text>First Line of code</Text>
    //   <StatusBar style="auto" />
    //   <Text>Wow!</Text>
    //   <Home />
    //   <Form />
    //   <Problem1 />
    //   <FlatListDemo />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "#fff",
    marginLeft: 10,
    marginRight: 10,
  },

  wrapper: { flex: 1, paddingTop: StatusBar.currentHeight },
});
