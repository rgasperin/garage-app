import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { styles } from "./style";

export function BuyButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <AntDesign name="shoppingcart" size={24} color="white" style={styles.icon} />
        <Text style={styles.text}>Buy This</Text>
      </TouchableOpacity>
    </View>
  );
}
