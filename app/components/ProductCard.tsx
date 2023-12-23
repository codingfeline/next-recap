import React from 'react'
import AddToCart from './AddToCart'
import styles from './ProductCard.module.css'

const ProductCard = () => {
  return (
    <div>
      <AddToCart />
      <h2 className={styles.test}>List of products</h2>
    </div>
  )
}

export default ProductCard
