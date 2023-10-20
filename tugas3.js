// NO 1 (membuat object dengan properties)

const Restaurant = {
    name: "Restaurant goto ramen",
    city: "bamndung",
    favoritedrink: "lemon tea",
    favoritefood: "ebi ramen",
    isVegan: "false",
};
console.table(Restaurant);

// N0 2 variabel nama restaurant yang bertipe array dengan ketentuan sama diatas .
const restaurant = ["nama restaurant :goto ramen", "city : Sukabumi" , "favorite Drink : lemon squash" , "favorite Food : ebi ramen", "isVegan : true"]
const[firstName, secondCity, thirdFavoriteDrink, fourthFavoritefood, fiveisVegan] = restaurant;
console.log(firstName);
console.log(secondCity);
console.log(thirdFavoriteDrink);
console.log(fourthFavoritefood);
console.log(fiveisVegan);