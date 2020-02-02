import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

/*
*** Available tags ***

image_front_url
image_front_small_url
image_front_thumb_url

image_url
image_small_url
image_thumb_url

image_ingredients_url

image_nutrition_url
image_nutrition_thumb_url

selected_images: {
  ingredients: {
    display: {
      fr: "https://...jpg",
      en: "https://...jpg"
    },
    small: {
      fr: "https://...jpg",
      en: "https://...jpg"
    },
    thumb: {
      fr: "https://...jpg",
      en: "https://...jpg"
    }
  },
  front: {...},
  nutrition: {...}
}

images: {
  front_fr: {},
  front_en: {
    geometry: "360x1101-234-30",
    y2: "377",
    angle: "0",
    rev: "15",
    white_magic: "false",
    imgid: "3",
    y1: "10.13671875",
    x2: "197.90234375",
    x1: "78.1875",
    sizes: {
      100: {
        h: 100,
        w: 33
      },
      200: {
        h: 200,
        w: 65
      },
      400: {
        h: 400,
        w: 131
      },
      full: {
        h: 1101,
        w: 360
      }
    },
    normalize: "false"
  },
  ingredients_fr: {},
  ingredients_en: {},
  nutrition_fr: {},
  nutrition_en: {}
}
*/

export default class ProductInfo extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>{this.props.product_name}</Text>
        <Text>{this.props.brands}</Text>
        <Image
          style={{ width: 66, height: 58 }}
          source={{ uri: this.props.image_url }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
