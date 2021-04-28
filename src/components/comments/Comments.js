import {useCallback, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import useHttp from '../../hooks/use-http'
import {getAllComments} from '../../lib/api'
import NewCommentForm from './NewCommentForm'
import LoadingSpinner from '../UI/LoadingSpinner'
import CommentsList from './CommentsList'
import styles from './Comments.module.css'

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false)   // show form
  const params = useParams()
  const quoteId = params.id   // extract id so useEffect does not depend on entire params

  const {sendRequest, data, error, status} = useHttp(getAllComments, true)

  useEffect(() => {
    sendRequest(quoteId)
  }, [quoteId, sendRequest])

  const startAddCommentHandler = () => setIsAddingComment(true)

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  let comments
  if (status === 'pending') comments = <div className='centered'><LoadingSpinner /></div>
  if (error) comments = <p className='centered focused'>{error}</p>
  if (status === 'completed' && (!data || data.length === 0)) comments = <p className='centered'>No comments yet.</p>
  if (status === 'completed' && data.length > 0) comments = <CommentsList comments={data} />
  
  return (
    <section className={styles.comments}>
      <h2>User Comments</h2>
      {isAddingComment
        ? <NewCommentForm quoteId={params.id} onAddedComment={addedCommentHandler} />
        : <button className='btn' onClick={startAddCommentHandler}>Add a Comment</button>
      }
      {comments}
    </section>
  )
}

export default Comments
