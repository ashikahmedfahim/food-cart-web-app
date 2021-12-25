import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredAmount = parseInt(amountRef.current.value);
    if (!enteredAmount || enteredAmount < 0 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmount);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        ref={amountRef}
        label="amount"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount</p>}
    </form>
  );
};

export default MealItemForm;
