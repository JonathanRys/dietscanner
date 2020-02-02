import { Component } from "react";
import axios from "axios";

export default function ProductFinder(productCode, callback) {
  axios
    .get(`https://world.openfoodfacts.org/api/v0/product/${productCode}.json`)
    .then(function(response) {
      callback(response);
    })
    .catch(function(error) {
      let errorResult = {
        data: {
          status: 0,
          error: "Network error"
        }
      };
      callback(errorResult);
      console.log("ERROR:", error);
    });
}
