import {Link} from 'react-router-dom'
import styles from './QuoteItem.module.css'

const QuoteItem = ({quote}) => {    // props from QuoteList.js
  const {id, author, text} = quote

  return (
    <li className={styles.item}>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <Link className='btn' to={`/quotes/${id}`}>View Fullscreen</Link>
    </li>
  )
}

export default QuoteItem
