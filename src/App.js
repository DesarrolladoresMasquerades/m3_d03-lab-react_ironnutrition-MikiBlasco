
import './App.css';
import foods from "./foods.json";
import FoodBox from "./components/FoodBox"
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { useState } from 'react'

const foodsCopy = [...foods]

function App() {

  const [items, setItems] = useState (foodsCopy)
  const [itemsDB, setItemsDB] = useState (foodsCopy)
  const [text, setText] = useState("Hide");

  function addFood(newItem){
    setItems([...items, newItem])  
    setItemsDB([...itemsDB, newItem]) 
  }

  function searchFood(value){
     let searchResult = itemsDB.filter((el)=>{
       return el.name.toLowerCase().includes(value)})

       setItems(searchResult)
       console.log(searchResult)
  }

  function deletedFood(item){
     let newArray = items.filter((el)=>{
       return el !== item
     })
   
    setItems(newArray)
    setItemsDB(newArray)
    console.log(newArray);
  }

  function toggleButton(){
    document.getElementById("formSection").classList.toggle('hidden')
    
    setText("Show")

  }

  return (
    <div className="App">
    <button  onClick={()=>toggleButton()}> 
     {text} </button>
    <section id="formSection" className='hidden'> 
    <AddFoodForm addFood={addFood}/>
    </section>
    <Search searchFood={searchFood} />
    
    {items.map((el)=> (<FoodBox  food={el} deletedFood={deletedFood} />) )}

    </div>
  );
}

export default App;
