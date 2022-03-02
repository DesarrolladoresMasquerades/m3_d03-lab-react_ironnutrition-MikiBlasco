
import './App.css';
import foods from "./foods.json";
import FoodBox from "./components/FoodBox"
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { useState } from 'react'

const foodsCopy = [...foods]

function App() {

  const [items, setItems] = useState (foodsCopy)
  const [itemsDB, setItemsDB = useState (foodsCopy)]

  function addFood(newItem){
    setItems([...items, newItem])  
    setItemsDB([...itemsDB, newItem]) 
  }

  function searchFood(value){
     let searchResult = items.filter((el)=>{
       return el.name.toLowerCase().includes(value)})

       setItems(searchResult)
       console.log(searchResult)
  }

  function deletedFood(item){
     let newArray = items.filter((el)=>{
       return el !== item
     })
   
    setItems(newArray)
    console.log(newArray);
  }

  return (
    <div className="App">

    <Search searchFood={searchFood} />
    <AddFoodForm addFood={addFood}/>
    {items.map((el)=> (<FoodBox  food={el} deletedFood={deletedFood} />) )}

    </div>
  );
}

export default App;
