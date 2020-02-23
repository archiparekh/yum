let listItems = [];
let recipesAPI = [
{
	"title": "Macaroni and Cheese",
	"ingredients": ["milk", "cheese", "butter", "macaroni", "salt", "peppper"]
}, 
{
	"title": "Earl Grey Yogurt Cake",
	"ingredients": ["milk", "tea", "eggs", "yogurt", "vanilla", "lemons"]
}, 
{
	"title": "Apple-Almond Galette",
	"ingredients": ["apples", "flour", "butter", "almonds", "maple syrup", "whipped cream"]
}, 
{
	"title": "Palak Paneer",
	"ingredients": ["cream", "paneer", "spinach"]
}, 
{
	"title": "Nachos",
	"ingredients": ["chips", "cheese", "beans", "jalepenos", "tomatoes", "salsa"]
}
];

function saveItem(){
	let searchBar = document.getElementById("ingredient").value;
	listItems.push(searchBar);
	//console.log("Search intitiated ");
	//console.log(searchBar);
	let item = document.createElement("LI");
	item.innerHTML=searchBar;
	let shoppingList = document.getElementById("listItems");
	shoppingList.append(item);
	console.log(listItems);
}	

function recipeSearch(){
	let recipeCounter=0;
	let suggestions = [];
	while (recipeCounter < 5){
	for (let i = 0; i < listItems.length; i++){
		let currRecipe=recipesAPI[recipeCounter]['ingredients'];
		let currIngred = listItems[i];
		if (currRecipe.includes(currIngred)){
			suggestions.push(recipesAPI[recipeCounter]);
		}
	}
	recipeCounter++;
	}
	if (suggestions.length == 0){
		document.getElementById("foundRecipes").innerHTML="No recipes matched yet";
	}
	else{
		let text = "";
		for (let k = 0; k < suggestions.length; k++){

			text += suggestions[k]['title'] + '\n';
			for (let h = 0; h < suggestions[k]['ingredients'].length; h++){
				text += suggestions[k]['ingredients'][h] + '\t'+ '\n';
			}
			
		}
		document.getElementById("foundRecipes").innerHTML = text;	
	}
	console.log(suggestions);
}



