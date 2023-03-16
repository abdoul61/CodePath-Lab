


const BaristaForm = () =>{
	// This is the functions or the  both buttons
	const onCheckAnswer = ()=>{

	}
	const onNewDrink =() =>{

	
	}

	return(
			<div>
			<form>
			This is the form 
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
