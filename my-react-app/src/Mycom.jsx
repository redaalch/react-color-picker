import React, {  useState } from "react";
function Mycom() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);
  const updateName = () => {
    setName("reda");
  };
  const incrementAge = () => {
    setAge(age + 1);
  };
  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Change name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment</button>
      <p>Employed: {isEmployed ? "true" : "false"}</p>
      <button onClick={toggleEmployedStatus}>Toggle</button>
    </div>
  );
}
export default Mycom;
