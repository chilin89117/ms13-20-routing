import styles from './HighlightedQuote.module.css'

const HighlightedQuote = ({quote}) => {
  const {text, author} = quote
  
  return (
    <figure className={styles.quote}>
      <p>{text}</p>
      <figcaption>{author}</figcaption>
    </figure>
  )
}

export default HighlightedQuote
