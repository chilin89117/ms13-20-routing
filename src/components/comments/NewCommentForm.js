import {useEffect, useRef} from 'react'
import useHttp from '../../hooks/use-http'
import {addComment} from '../../lib/api'
import LoadingSpinner from '../UI/LoadingSpinner'
import styles from './NewCommentForm.module.css'

const NewCommentForm = ({quoteId, onAddedComment}) => {
  const commentTextRef = useRef()

  const {sendRequest, error, status} = useHttp(addComment)

  const submitFormHandler = event => {
    event.preventDefault()
    sendRequest({quoteId, commentData: {text: commentTextRef.current.value}})
  }

  useEffect(() => {
    if (status === 'completed' && !error) onAddedComment()
  }, [error, status, onAddedComment])

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      {status === 'pending' && <div className='centered'><LoadingSpinner /></div>}
      <div className={styles.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={styles.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  )
}

export default NewCommentForm
