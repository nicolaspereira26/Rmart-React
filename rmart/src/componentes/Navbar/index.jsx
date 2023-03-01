import React from 'react'
import ButtonRegister from '../ButtonRegister'
import Category from '../Category'
import Logo from '../Logo'
import styles from './index.module.css'

const Navbar = () => {
  return (
    <div className={styles.header}>
      <ButtonRegister />
      <Category/>
      <Logo/>
    </div>
  )
}

export default Navbar