import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text style={styles.searchText}> search</Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.listText}> list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: isAndroid ? StatusBar.currentHeight : 0,
  },
  search: {
    flex: 0.05,
    backgroundColor: "green",
  },
  searchText: {
    padding: 10,
  },
  list: {
    flex: 0.95,
    backgroundColor: "blue",
  },
  listText: {
    padding: 10,
  },
});
