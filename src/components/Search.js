import { useState } from "react"

function Search(props) {

    const [searchedFood, setSearchedFood] = useState("")

    function handleDataChange(event){
        setSearchedFood(event.target.value) 
        props.searchFood(event.target.value)
    }

    return(

        <form>
            <label>Search</label>
            <input type="text" name="food" value={searchedFood} onChange={handleDataChange}></input>
        </form>

    )
}

export default Search