import { useState } from "react";

function AddFoodForm(props) {
  const [formView, setFormView] = useState(true)


  function toggleButton(){
    let variable = true
    if (variable === true) variable = false
    if (variable === false) variable = true

    setFormView (variable)
  }

  const [formFood, setFormFood] = useState({
    name: "",
    calories: "",
    image: "",
    servings: "",
  });

  function handleDataChange(event) {
    const inputName = event.target.name;
    let value = event.target.value;

    console.log("inputName: ", inputName, "value: ", value);
    setFormFood({ ...formFood, [inputName]: value });
    console.log(formFood);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("formFood: ", formFood);

    props.addFood(formFood);
  }

  return (

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formFood.name}
          onChange={handleDataChange}
        />

        <label>Image:</label>
        <input
          type="text"
          name="image"
          value={formFood.image}
          onChange={handleDataChange}
        />

        <label>Calories:</label>
        <input
          type="text"
          name="calories"
          value={formFood.calories}
          onChange={handleDataChange}
        />

        <label>Servings:</label>
        <input
          type="text"
          name="servings"
          checked={formFood.servings}
          onChange={handleDataChange}
        />
        <button type="submit">Add a Food</button>
      </form>
  );
}

export default AddFoodForm;
