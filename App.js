/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, Button, View, ScrollView } from "react-native";
// import { RNCamera } from "react-native-camera";
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';

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
      productInfo: null,
      hasCameraPermission: false
    };
  }

  async componentDidMount(nextProps) {
    const { status } = await Camera.requestPermissionsAsync();
    
    this.setState({
      hasCameraPermission: status === 'granted',
      message: "Scan your first item\nHold the phone in the same direction as the barcode"
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cameraContainer}>
          <BarCodeScanner 
            style={styles.preview}
            barCodeScannerSettings={{
              barCodeTypes: [
                'ean13',
                'ean8',
                'upc_a',
                'upc_e',
                'upc_ean'
              ]
            }}
            onBarCodeScanned={this.handleBarCode.bind(this)}
            />
          <ScannerOverlay/>
        </View>
        <View>
          <View style={styles.tray}>
            <Text style={styles.message}>{this.state.message}</Text>
            {this.state.productInfo ? (
              <ScrollView>
                <Text style={styles.message}>{this.state.message}</Text>
                <Text>{JSON.stringify(this.state.productInfo.data.product.nutriments)}</Text>
                <NutritionalInfo {...this.state.productInfo.data.product.nutriments}/>
              </ScrollView>
            ) : null}
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
      </View>
    );
  }

  handleBarCode(scanResult) {
    // Debounce @todo memoize
    if (this.state.lastScan === scanResult.data) return;

    console.log(
      `Code of type ${scanResult.type} read with a result of ${scanResult.data}`
    );

    const scannerCallback = response => {
      let msg;

      console.log("DATA:", response);

      if (!!response.data.status) {
        msg = `Ingredients: ${response.data.product.ingredients_text}`;
        this.setState({ productInfo: response });
        console.log("Product found:", response.data.product.ingredients_text);
        console.log("Nutriments:", response.data.product.nutriments);
      } else {
        if (!response.data.error) {
          msg = "Product not found";
          console.log("Product not found");
          //setTimeout(resetScanner, 5000);
        } else {
          msg = "response.data.error";
        }
        this.setState({ productInfo: null });
      }

      this.setState({
        message: msg,
        lastScan: scanResult.data,
        productInfo: response
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

    ProductFinder(scanResult.data, scannerCallback);
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

    backgroundColor: "black"
  },
  message: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  cameraContainer: {
    backgroundColor: "black",
    flex: 1,
    flexDirection: "row",
    height: "100%",
    width: "100%"
  },
  resetButton: {
    bottom: 10
  },
  tray: {
    backgroundColor: "transparent"
  }
});
