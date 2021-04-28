import {Link} from 'react-router-dom'
import styles from './NoQuotesFound.module.css'

const NoQuotesFound = () => {
  return (
    <div className={styles.noquotes}>
      <p>No quotes found!</p>
      <Link className='btn' to='/new'>Add a Quote</Link>
    </div>
  )
}

export default NoQuotesFound
