import React from "react";
import styles from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImg} alt="" />
      </div>
    </>
  );
};

export default Header;
