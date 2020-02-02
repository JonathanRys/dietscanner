export default (diets = {
  omnivore: [],
  pescatarian: ["red_meat", "pork"],
  vegetarian: ["red_meat", "pork", "fish", "poultry", "shellfish", "insects"],
  "ovo-lacto-vegetarian": [
    "red_meat",
    "pork",
    "fish",
    "poultry",
    "shellfish",
    "insects",
    "rennet"
  ],
  "ovo-vegetarian": [
    "red_meat",
    "pork",
    "fish",
    "poultry",
    "shellfish",
    "insects",
    "rennet",
    "dairy"
  ],
  "lacto-vegetarian": [
    "red_meat",
    "pork",
    "fish",
    "poultry",
    "shellfish",
    "insects",
    "rennet",
    "eggs"
  ],
  vegan: [
    "red_meat",
    "pork",
    "fish",
    "poultry",
    "shellfish",
    "insects",
    "rennet",
    "eggs",
    "dairy",
    "non_vegan"
  ],
  halal: ["pork"],
  ital: [
    "red_meat",
    "pork",
    "fish",
    "poultry",
    "shellfish",
    "insects",
    "rennet",
    "eggs",
    "dairy",
    "non_vegan",
    "artificial"
  ],
  jain: [
    "red_meat",
    "pork",
    "fish",
    "poultry",
    "shellfish",
    "insects",
    "rennet",
    "eggs"
  ],
  kashrut: ["pork"]
});
