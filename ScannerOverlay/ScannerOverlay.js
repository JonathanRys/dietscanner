import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class ScannerOverlay extends Component {
  render() {
    return (
      <View style={styles.overlay}>
        <View style={[styles.shaded, styles.topOverlay]} />

        <View style={styles.centerOverlay}>
          <View style={[styles.shaded, styles.leftOverlay]} />
          <View style={[styles.transparent, styles.centerPane]}>
            <View
              style={[styles.transparent, styles.topPane, styles.rlBorder]}
            />
            <View
              style={[styles.transparent, styles.leftPane, styles.tbBorder]}
            />
            <View
              style={[styles.transparent, styles.rightPane, styles.tbBorder]}
            />
            <View
              style={[styles.transparent, styles.bottomPane, styles.rlBorder]}
            />
          </View>
          <View style={[styles.shaded, styles.rightOverlay]} />
        </View>

        <View style={[styles.shaded, styles.bottomOverlay]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start"
  },
  transparent: {
    backgroundColor: "transparent"
  },
  shaded: {
    backgroundColor: "black",
    opacity: 0.2
  },

  centerOverlay: {
    height: "60%",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start"
  },
  topOverlay: {
    alignSelf: "flex-start",
    height: "20%",
    width: "100%"
  },
  bottomOverlay: {
    alignSelf: "flex-end",
    height: "20%",
    width: "100%"
  },
  leftOverlay: {
    alignSelf: "flex-start",
    height: "100%",
    width: "20%"
  },
  rightOverlay: {
    alignSelf: "flex-end",
    height: "100%",
    width: "20%"
  },

  centerPane: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.25)",
    width: "60%",
    height: "100%"
  },

  leftPane: {
    position: "absolute",
    height: "100%",
    width: 25
  },
  rightPane: {
    right: 0,
    position: "absolute",
    height: "100%",
    width: 25
  },
  topPane: {
    position: "absolute",
    width: "100%",
    height: 25
  },
  bottomPane: {
    bottom: 0,
    position: "absolute",
    width: "100%",
    height: 25
  },

  rlBorder: {
    borderColor: "red",
    borderLeftWidth: 2,
    borderRightWidth: 2
  },
  tbBorder: {
    borderColor: "red",
    borderTopWidth: 2,
    borderBottomWidth: 2
  }
});
