import React, { Component } from "react";

import { TextInput, StyleSheet, Text, View, Button } from "react-native";

class EnterPLU extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Enter item PLU:</Text>
        <TextInput />
        <Button title="Look it up" onPress={this.props.handleButtonPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
