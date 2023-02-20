import React from 'react'
import styles from "./header.module.css"
import ProductCard from "../ProductCard/ProductCard"
function Header() {
  return (
    <div className={styles.header}>
        <img className={styles.profile} src="https://ichef.bbci.co.uk/news/800/cpsprodpb/7586/production/_116868003_37ece8a2-3344-4459-8d6a-9c1db248d13e.jpg" alt="musk profile photo" />

        <h1>Spend Elon Musk's Money</h1>
    </div>
  )
}

export default Header