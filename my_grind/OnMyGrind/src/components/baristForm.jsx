import {useState} from 'react';
import RecipeChoices from './recipeChoices';
import drinks from './drinks.json';

const BaristaForm = () =>{
	const [inputs,setInputs] = useState({
		'temperature':'',
		'milk': '',
		'syrup':'',
		'blended':''
	});

	const ingredients = {
		'temperature':['hot','lukewarm','cold'],
		'syrup': ['mocha','vanilla','toffre','maple','caramel','other','none'],
		'milk': ['cow','oat','goat','almond','none'],
		'blended': ['yes','turbo','no']
	}
	// setCurrentDrink and setTrueReciep

	const [currentDrink,setCurrentDrink] = useState('');
	const [trueRecipie,setTrueRecipe] = useState('');

	// This is the functions or the  both buttons
	const onCheckAnswer = ()=>{
			console.log("clicked");
	}
	const getNextDrink = () =>{
		let randomDrinkIndex = Math.floor(Math.random() * drinks.drinks.length);
		setCurrentDrink(drinks.drinks[randomDrinkIndex].name)
		setTrueRecipe(drinks.drinks[randomDrinkIndex].ingredients)

	}
	const onNewDrink =() =>{
		setInputs({
			'temperature':'',
			'milk':'',
			'syrup':'',
			'blended':'',
		})
		getNextDrink();
	}

	return(
			<div>
			<h2>Hi, I'd like to order a: </h2>
			<form>
				<h3>Temperature</h3>
				<div className="answer-space">
					{inputs["temperature"]}
				</div>
				<RecipeChoices
				 handleChange={(e)=>setInputs((prevState)=>({
						...prevState,
						[e.target.name]:e.target.value,
					}))}
				 lable="temperature"
					choices={ingredients["temperature"]}
					checked={inputs["temperature"]}
				/>	
			</form>
			<form>
				<h3>syrup</h3>
				<div className="answer-space">
					{inputs["syrup"]}
				</div>
				<RecipeChoices
				 handleChange={(e)=>setInputs((prevState)=>({
						...prevState,
						[e.target.name]:e.target.value,
					}))}
				 lable="syrup"
					choices={ingredients["syrup"]}
					checked={inputs["syrup"]}
				/>	
			</form>
      <form>
				<h3>Milk</h3>
				<div className="answer-space">
					{inputs["milk"]}
				</div>
				<RecipeChoices
				 handleChange={(e)=>setInputs((prevState)=>({
						...prevState,
						[e.target.name]:e.target.value,
					}))}
				 lable="milk"
					choices={ingredients["milk"]}
					checked={inputs["milk"]}
				/>	
			</form>
			<form>
				<h3>Blended</h3>
				<div className="answer-space">
					{inputs["milk"]}
				</div>
				<RecipeChoices
				 handleChange={(e)=>setInputs((prevState)=>({
						...prevState,
						[e.target.name]:e.target.value,
					}))}
				 lable="milk"
					choices={ingredients["blended"]}
					checked={inputs["blended"]}
				/>	
			</form>
			<button type="submit" className="button sumbit" onClick={onCheckAnswer}>
				Check Answer
			</button>
			<button 
				className="button newDrink"
				type="new-drink-button"
				onClick={onNewDrink}
				>
				New Drink
			</button>
		</div>)
}



export default BaristaForm
