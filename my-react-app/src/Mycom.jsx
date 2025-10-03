import React, { useState } from "react";
function Mycomponent() {
  const [foods, setFoods] = useState([]);
  function handleAddFood() {
    const newFood = document.querySelector("#foodInput").value;
    document.querySelector("#foodInput").value = "";
    setFoods((f) => [...f, newFood]);
  }
  function handleRemoveFood(index) {
    setFoods(foods.filter((_element,i)=>i !==index));
  }

  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={()=> handleRemoveFood(index)}>
            {food}</li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="enter food name" />
      <button onClick={handleAddFood}>Add food</button>
    </div>
  );
}
export default Mycomponent;
