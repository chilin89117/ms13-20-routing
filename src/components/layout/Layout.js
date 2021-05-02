import MainNav from './MainNav'
import styles from './Layout.module.css'

const Layout = ({children}) => (
  <>
    <MainNav />
    <main className={styles.main}>{children}</main>
  </>
)

export default Layout
