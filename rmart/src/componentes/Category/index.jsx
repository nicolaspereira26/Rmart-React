import React from 'react'
import styles from './index.module.css'
import arrow from '../../images/arrow.png'
const Category = () => {
  return (

<div>
    <p>Categorias</p>
    <button className={styles.categoryButton}><img src={arrow} alt="" /></button>
</div>

  )
}

export default Category