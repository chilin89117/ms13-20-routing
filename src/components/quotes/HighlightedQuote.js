import styles from './HighlightedQuote.module.css'

const HighlightedQuote = ({quote: {text, author}}) => (
  <figure className={styles.quote}>
    <p>{text}</p>
    <figcaption>{author}</figcaption>
  </figure>
)

export default HighlightedQuote
