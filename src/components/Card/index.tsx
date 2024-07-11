import React, { useEffect, useState } from "react";
import { View, Text, Button, Image } from "react-native";

import { styles } from "./style";

import logo from "../../../assets/logo.png";
import Divider from "../Divider/inidex";

import { CAR_ASSETS_BASE_URL } from "../../constants/car";

import { BuyButton } from "../BuyButton";
import { CarModel } from "./props";

import { handleNextItem, handlePreviousItem, loadCarData } from "./actions";

export default function Card() {
  const [carData, setCarData] = useState<CarModel | null>(null);

  useEffect(() => {
    (async () => {
      await loadCarData(1, setCarData);
    })();
  }, []);

  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={logo} />
    </View>
  );

  const renderCarDetail = () => (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carName}>{carData?.carName}</Text>
    </View>
  );

  const renderCarImage = () => <Image style={styles.image} source={{ uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png` }} />;

  const renderPrice = () => (
    <View style={styles.priceLabelContainer}>
      <Button title="<" color={"#01A6B3"} onPress={() => handlePreviousItem(carData, setCarData)} />
      <Text style={styles.priceLabel}>{carData?.price}</Text>
      <Button title=">" color={"#01A6B3"} onPress={() => handleNextItem(carData, setCarData)} />
    </View>
  );

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}
      <Divider />
      {renderCarDetail()}
      {renderCarImage()}
      <Divider />
      <BuyButton />
      {renderPrice()}
    </View>
  );
}
