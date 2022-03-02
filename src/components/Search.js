import { useState } from "react"

function Search() {

    const [searchedFood, setSearchedFood] = useState({
        name: "",
        calories: "",
        image: "",
        servings: "",
    })

    return(

        <form onSubmit={handleSubmit}>
            <label>Search</label>
            <input type="text" name="food" value={searchedFood}> </input>
            <button type="submit">Search Food</button>
        </form>

    )
}

export default Search