import React, { useState } from "react";
function Mycomponent() {
  const [car, setCar] = useState({
    year: 2024,
    make: "ford",
    model: "mustang",
  });
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setCar((c) => ({
      ...c,
      [name]: type === "number" ? Number(value) : value,
    }));
  };
  return (
    <div>
      <p>
        Your favorite car is: {car.year} {car.make} {car.model}
      </p>
      <input
        type="number"
        name="year"
        value={car.year}
        onChange={handleChange}
      />
      <input type="text" name="make" value={car.make} onChange={handleChange} />
      <input
        type="text"
        name="model"
        value={car.model}
        onChange={handleChange}
      />
    </div>
  );
}
export default Mycomponent;
