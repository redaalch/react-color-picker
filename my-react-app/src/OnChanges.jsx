import React, { useState } from "react";
function OnChanges() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");
  const handleChange = (callback, event) => {
    callback(event.target.value);
  };
  return (
    <div>
      <input
        value={name}
        onChange={(event) => handleChange(setName, event)}
        type="text"
      />
      <p>name: {name}</p>

      <input
        value={quantity}
        onChange={(event) => handleChange(setQuantity, event)}
        type="number"
      />
      <p>Quantity: {quantity}</p>

      <textarea
        value={comment}
        onChange={(e) => handleChange(setComment, e)}
        placeholder="leave a comment"
      />
      <p>Comment: {comment}</p>

      <select value={payment} onChange={(e) => handleChange(setPayment, e)}>
        <option value="" disabled>
          Select an option
        </option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="GiftCard">GiftCard</option>
      </select>
      <p>Payment: {payment}</p>

      <label>
        <input
          type="radio"
          value="Pick up"
          checked={shipping === "Pick up"}
          onChange={(e) => handleChange(setShipping, e)}
        />
        Pick up
      </label>
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={(e) => handleChange(setShipping, e)}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}
export default OnChanges;
