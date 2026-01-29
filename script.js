const recipes = {
  brownie: {
    title: "Chocolate Brownie",
    time: "40 mins",
    level: "Easy",
    image: "https://i.ytimg.com/vi/qdxqip0Bgt8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCPjO2A80XRgLsPVseoe9Q8KzCccA",
    ingredients: [
      "Dark chocolate",
      "Butter",
      "Sugar",
      "Flour",
      "Cocoa powder"
    ],
    steps: [
      "Melt chocolate and butter together.",
      "Add sugar and mix well.",
      "Add flour and cocoa powder.",
      "Pour batter into tray.",
      "Bake at 180°C for 25 minutes."
    ]
  },

  truffle: {
    title: "Chocolate Truffle",
    time: "25 mins",
    level: "Easy",
    image: "https://rukminim2.flixcart.com/image/480/480/kyrlifk0/chocolate/t/d/l/300-premium-chocolate-gift-pack-dark-chocolate-box-gift-truffle-original-imagaxc3th9gmwcu.jpeg?q=90",
    ingredients: [
      "Dark chocolate",
      "Fresh cream",
      "Cocoa powder"
    ],
    steps: [
      "Heat cream and pour over chocolate.",
      "Mix until smooth.",
      "Cool the mixture.",
      "Roll into balls and coat with cocoa powder."
    ]
  },

  lava: {
    title: "Chocolate Lava Cake",
    time: "30 mins",
    level: "Medium",
    image: "https://bakingbites.com/wp-content/uploads/2019/02/DSC_1436-001.jpg",
    ingredients: [
      "Dark chocolate",
      "Butter",
      "Eggs",
      "Sugar",
      "Flour"
    ],
    steps: [
      "Prepare the batter.",
      "Pour into moulds.",
      "Bake lightly so center stays molten."
    ]
  },

  "hot-chocolate": {
    title: "Hot Chocolate",
    time: "15 mins",
    level: "Easy",
    image: "https://www.foodandwine.com/thmb/VSSakyBhpjt2NWTKQUAU05eb2xM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Spiked-Peanut-Butter-Hot-Chocolate-FT-MAG-RECIPE-0225-b72b3e0d1545494aa9702eff42669656.jpg",
    ingredients: [
      "Milk",
      "Cocoa powder",
      "Sugar",
      "Chocolate pieces"
    ],
    steps: [
      "Heat milk in a pan.",
      "Add cocoa powder and sugar.",
      "Add chocolate pieces.",
      "Stir until smooth and serve hot."
    ]
  }
};

// READ recipe name from URL
const params = new URLSearchParams(window.location.search);
const recipeKey = params.get("recipe");

// CHECK & INJECT DATA
if (recipes[recipeKey]) {
  document.getElementById("recipe-title").innerText =
    recipes[recipeKey].title;

  document.getElementById("recipe-time").innerText =
    recipes[recipeKey].time;

  document.getElementById("recipe-level").innerText =
    recipes[recipeKey].level;

  document.getElementById("recipe-image").src =
    recipes[recipeKey].image;

  // Ingredients
  const ingredientsList = document.getElementById("recipe-ingredients");
  ingredientsList.innerHTML = "";
  recipes[recipeKey].ingredients.forEach(item => {
    ingredientsList.innerHTML += `<li>${item}</li>`;
  });

  // Steps
  const stepsList = document.getElementById("recipe-steps");
  stepsList.innerHTML = "";
  recipes[recipeKey].steps.forEach(step => {
    stepsList.innerHTML += `<li>${step}</li>`;
  });
}