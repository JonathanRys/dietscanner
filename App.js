/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, Button, View } from "react-native";
// import { RNCamera } from "react-native-camera";
import { Camera } from 'expo-camera';

import Settings from "./Settings/Settings.js";
import ProductFinder from "./ProductFinder/ProductFinder.js";
import NutritionalInfo from "./ProductInfo/NutritionalInfo/NutritionalInfo.js";
import ScannerOverlay from "./ScannerOverlay/ScannerOverlay.js";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: instructions,
      lastScan: null,
      productInfo: null
    };
  }

  componentDidMount(nextProps) {
    this.setState({
      message:
        "Scan your first item\nHold the phone in the same direction as the barcode"
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cameraContainer}>
        <NutritionalInfo />
        {/*
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            permissionDialogTitle={"Permission to use camera"}
            permissionDialogMessage={
              "We need your permission to use your camera phone"
            }
            onBarCodeRead={this.handleBarCode.bind(this)}
          />
        */}
        {/*
        
          <Camera 
            style={styles.preview}
            type={Camera.Constants.Type.back}
            onBarCodeScanned={this.handleBarCode.bind(this)}
            />

          <ScannerOverlay />
        */}
        </View>
        <View style={styles.tray}>
          <Text style={styles.message}>{this.state.message}</Text>
        </View>
        {this.state.productInfo ? (
          <Button
            style={styles.resetButton}
            title={"SCAN NEW ITEM"}
            onPress={this.handleScanButton.bind(this)}
          />
        ) : (
          <Button
            style={styles.resetButton}
            title={"ENTER PLU"}
            onPress={this.handlePLUButton.bind(this)}
          />
        )}
      </View>
    );
  }

  handleBarCode(scanResult) {
    if (this.state.lastScan === scanResult.data) return;

    console.log(
      `Code of type ${scanResult.type} read with a result of ${scanResult.data}`
    );

    dataFetcher = data => {
      let msg;

      console.log("DATA:", data);

      if (!!data.data.status) {
        msg = `Ingredients: ${data.data.product.ingredients_text}`;
        this.setState({ productInfo: data });
        console.log("Product found:", data.data.product.ingredients_text);
      } else {
        if (!data.data.error) {
          msg = "Product not found";
          console.log("Product not found");
          //setTimeout(resetScanner, 5000);
        } else {
          msg = "data.data.error";
        }
        this.setState({ productInfo: null });
      }

      this.setState({
        message: msg,
        lastScan: scanResult.data,
        productInfo: data
      });
      // product.brands

      // product.selected_images.front.(small/thumb/display).en
      // product.image_front_thumb_url
      // product.image_thumb_url
      // product.image_url

      // product.ingredients_n

      // product.product_name

      // product.nutriments.
      // fat, fat_unit, fat_value, fat_100g, fat_serving
      // salt, salt_unit, salt_value, salt_100g, salt_serving
      // sodium, sodium_unit, sodium_value, sodium_100g, sodium_serving
      // energy, energy_unit, energy_value, energy_100g, energy_serving
      // proteins, energy_unit, energy_value, energy_100g, energy_serving
      // carbohydrates, carbohydrates_unit, carbohydrates_value, carbohydrates_100g, carbohydrates_serving
    };

    ProductFinder(scanResult.data, dataFetcher);
  }

  handleScanButton(e) {
    this.setState({
      message: "Ready to scan",
      lastScan: null,
      productInfo: null
    });
  }

  handlePLUButton(e) {
    this.setState({
      message: "Enter PLU",
      lastScan: null,
      productInfo: null
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "red",
    borderColor: "blue"
  },
  message: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  cameraContainer: {
    width: "100%",
    flex: 1,
    backgroundColor: "red"
  },
  resetButton: {
    bottom: 10
  },
  tray: {
    backgroundColor: "transparent"
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.8
  }
});
