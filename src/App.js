import logo from './logo.svg';
import './App.css';
import foods from "./foods.json";
import FoodBox from "./components/FoodBox"
import AddFoodForm from './components/AddFoodForm';
import Search from 'antd/lib/transfer/search';
import { useState } from 'react'

const foodsCopy = [...foods]

function App() {

  const [items, setItems] = useState (foodsCopy)

  function addFood(newItem){
    setItems([...items, newItem])   
  }

  return (
    <div className="App">

    <Search searchFood={searchFood} />
    <AddFoodForm addFood={addFood}/>
    {items.map((el)=> (<FoodBox  food={el} />) )}

    



    </div>
  );
}

export default App;
