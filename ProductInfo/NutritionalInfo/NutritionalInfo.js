import React, { Component } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { createIconSet } from "react-native-vector-icons";
import * as Font from 'expo-font';

// const glyphMap = { "icon-name": 1234, test: "∆" };
// const Icon = createIconSet(glyphMap, "FranklinGothic-Heavy");

class Item extends Component {
  render() {
    return (
      <View
        style={[{ marginLeft: this.props.subItem ? 20 : 0 }, styles.mainItem]}
      >
        <Text>
          {this.props.children} {this.props.value}
          {this.props.unit}
        </Text>
        <Text>
          {this.props.percent == null ? "" : this.props.percent + "%"}
        </Text>
      </View>
    );
  }
}

export default class NutritionalInfo extends Component {
  constructor() {
    super();

    this.state = {
      fontLoaded: false
    };
  }

  componentDidMount =  async() => {
    await Font.loadAsync({
      "FranklinGothic-Heavy": require("./../../assets/fonts/FranklinGothic-Heavy.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const fontStyle = {};

    if (this.state.fontLoaded) {
      fontStyle.fontFamily = "FranklinGothic-Heavy";
    }

    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={{...styles.headerText, ...fontStyle}}>Nutrition Facts</Text>
        </View>
        <Text>
          Serving Size {100}
          {"g"}
        </Text>
        <Text>Servings Per Container {2}</Text>

        <View style={styles.calorieInfo}>
          <Text style={styles.smallBoldText}>Amount per serving</Text>
          <View style={styles.caloricInfo}>
            <View style={styles.calories}>
              <Text style={styles.largeBoldText}>Calories </Text>
              <Text>{250}</Text>
            </View>
            <Text>Calories from Fat {110}</Text>
          </View>
        </View>
        <View style={styles.dailyValue}>
          <Text style={styles.smallBoldText}>% Daily Value*</Text>
        </View>
        <View style={styles.limitThese}>
          <Item {...{ value: 12, unit: "g", percent: 18 }}>
            <Text style={styles.largeBoldText}>Total Fat</Text>
          </Item>
          <Item {...{ value: 10, unit: "g", percent: 15, subItem: true }}>
            Saturated Fat
          </Item>
          <Item {...{ value: 3, unit: "g", percent: null, subItem: true }}>
            Trans Fat
          </Item>
          <Item {...{ value: 30, unit: "mg", percent: 10 }}>
            <Text style={styles.largeBoldText}>Cholesterol</Text>
          </Item>
          <Item {...{ value: 470, unit: "mg", percent: 20 }}>
            <Text style={styles.largeBoldText}>Sodium</Text>
          </Item>
          <Item {...{ value: 31, unit: "g", percent: 10 }}>
            <Text style={styles.largeBoldText}>Total Carbohydrate</Text>
          </Item>
          <Item {...{ value: 0, unit: "g", percent: 0, subItem: true }}>
            Dietary Fiber
          </Item>
          <Item {...{ value: 5, unit: "g", percent: null, subItem: true }}>
            Sugars
          </Item>

          <Item {...{ value: 5, unit: "g", percent: null }}>
            <Text style={styles.largeBoldText}>Protein</Text>
          </Item>
        </View>
        <View style={styles.vitamins}>
          <Item {...{ value: "", unit: "", percent: 4 }}>Vitamin A</Item>
          <Item {...{ value: "", unit: "", percent: 2 }}>Vitamin C</Item>
          <Item {...{ value: "", unit: "", percent: 20 }}>Calcium</Item>
          <Item {...{ value: "", unit: "", percent: 4 }}>Iron</Item>
        </View>
        <View style={styles.footnote}>
          <Text>* </Text>
          <Text style={{ maxWidth: "95%" }}>
            Percent Daily Values are based on a 2,000 calorie diet. Your Daily
            Values may be higher or lower depending on your calorie needs.
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    padding: 10,
    paddingTop: 0,
    backgroundColor: "white"
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 44
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center"
  },
  dailyValue: {
    flexDirection: "row",
    justifyContent: "flex-end",
    borderTopWidth: 4,
    marginTop: 2
  },
  calorieInfo: {
    borderTopWidth: 8,
    marginTop: 10
  },
  caloricInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 1,
    paddingTop: 3,
    borderTopWidth: 1
  },
  calories: {
    flexDirection: "row"
  },
  footnote: {
    flexDirection: "row",
    width: "100%",
    marginTop: 1,
    paddingTop: 5,
    marginBottom: 5,
    borderTopWidth: 1
  },
  totalFat: {
    flexDirection: "row"
  },
  vitamins: {
    borderTopWidth: 8,
    marginTop: 8
  },
  smallBoldText: {
    fontSize: 12,
    fontWeight: "bold"
  },
  largeBoldText: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: -4
  },
  limitThese: {
    flexDirection: "column"
  },
  mainItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1
  },
  subItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    marginLeft: 20
  }
});
