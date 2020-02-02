import { Component } from "react";
import axios from "axios";

export default function Categorizer(ingredientList, callback) {
  axios
    .get(`https://foodscanner.herokuapp.com/api/v1.0/tags/${ingredientList}`)
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
      console.log("ERROR:", error);
      callback(errorResult);
    });
}
