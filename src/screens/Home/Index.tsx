import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { styles } from "./Styles";

import Card from "../../components/Card";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.cameraBox}>
        <Card />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
