import CommentItem from './CommentItem'
import styles from './CommentsList.module.css'

const CommentsList = ({comments}) => (
  <ul className={styles.comments}>
    {comments.map(c => <CommentItem key={c.id} text={c.text} />)}
  </ul>
)

export default CommentsList
