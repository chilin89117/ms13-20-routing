import {NavLink} from 'react-router-dom'
import styles from './MainNav.module.css'

const MainNav = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Great Quotes</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to='/quotes' activeClassName={styles.active}>All Quotes</NavLink>
          </li>
          <li>
            <NavLink to='/new'  activeClassName={styles.active}>Add Quote</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNav
