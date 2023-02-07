import { Link, useLocation } from 'react-router-dom'
import MenuLink from '../MenuLink';
import styles from './Menu.module.css'

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink rota="/">Início</MenuLink>
        <MenuLink rota="/sobremim">Sobre Mim</MenuLink>
      </nav>
    </header>
  )
}