import styles from './CommentItem.module.css'

const CommentItem = ({text}) => (
  <li className={styles.item}>
    <p>{text}</p>
  </li>
)

export default CommentItem
