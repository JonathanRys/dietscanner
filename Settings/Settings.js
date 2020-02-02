import React, { Component } from "react";
import diets from "../data/diets";
import {
  StyleSheet,
  Text,
  Picker,
  Button,
  ScrollView,
  FlatList,
  CheckBox,
  View
} from "react-native";

export default class Settings extends Component {
  constructor() {
    super();

    this.state = {
      diet: null,
      allergens: {
        celery: false,
        crustaceans: false,
        eggs: false,
        fish: false,
        lupin: false,
        milk: false,
        molluscs: false,
        mustard: false,
        peanuts: false,
        sesame: false,
        "sulfer-dioxide": false,
        soya: false,
        "tree-nuts": false,
        wheat: false
      }
    };
  }

  convertAllergens = () => {
    let listData = [];
    for (let x in this.state.allergens) {
      listData.push({ key: x });
    }
    return listData;
  };

  saveHandler = e => {
    return true;
  };

  cancelHandler = e => {
    return false;
  };

  toggleAllergen = (e, key) => {
    let toggleState = {};
    toggleState[key] = !this.state.allergens[key];

    this.setState({ allergens: { ...this.state.allergens, ...toggleState } });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pageHeading}>
          <Text style={styles.pageHeadingText}>Settings</Text>
        </View>
        <ScrollView style={styles.mainScroller}>
          <View style={styles.section}>
            <Text style={styles.sectionHeading}>Diet</Text>
            <Text>Choose the diet that best describes yours:</Text>
            <Picker
              selectedValue={this.state.diet}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ diet: itemValue })
              }
              mode="dropdown"
            >
              {Object.keys(diets)
                .sort()
                .map(diet => {
                  return (
                    <Picker.Item
                      key="diet"
                      value={diet}
                      label={diet.charAt(0).toUpperCase() + diet.slice(1)}
                    />
                  );
                })}
            </Picker>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionHeading}>Allergies</Text>
            

              <FlatList
                data={this.convertAllergens()}
                renderItem={({ item }) => {
                  return (
                    <View key={item.key}>
                      <CheckBox
                        onValueChange={e => {
                          this.toggleAllergen(e, item.key);
                        }}
                        value={this.state.allergens[item.key]}
                      />
                      <Text>{item.key}</Text>
                    </View>
                  );
                }}
              />

          
          </View>
          <View style={styles.controls}>
            <Button title="Cancel" onPress={this.cancelHandler} />
            <Button title="Save" onPress={this.saveHandler} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white"
  },
  pageHeading: {
    justifyContent: "center",
    flexDirection: "row",
    padding: 20,
    paddingBottom: 10
  },
  pageHeadingText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  mainScroller: {
    margin: 25
  },
  section: {
    flexDirection: "column",
    marginTop: 10,
    paddingBottom: 10
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: "bold",
    borderBottomWidth: 1,
    marginBottom: 10
  },
  picker: {
    height: 50,
    width: "100%"
  },
  controls: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%"
  }
});
