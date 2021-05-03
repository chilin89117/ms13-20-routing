import {useRef, useState} from 'react'
import {Prompt} from 'react-router-dom'
import Card from '../UI/Card'
import LoadingSpinner from '../UI/LoadingSpinner'
import styles from './QuoteForm.module.css'

const QuoteForm = ({isLoading, onAddQuote}) => {
  const [isEntering, setIsEntering] = useState(false)   // when form gets focus
  const authorInputRef = useRef()
  const textInputRef = useRef()

  const formFocusHandler = () => setIsEntering(true)    // enable Prompt when navigating away

  const promptMessage = location => 'Are you sure you want to leave? All entered data will be lost.'

  const submitFormHandler = event => {
    event.preventDefault()
    const enteredAuthor = authorInputRef.current.value
    const enteredText = textInputRef.current.value
    if (enteredAuthor.trim() === '' || enteredText.trim() === '') {
      alert('Please enter valid data.')
      return
    }
    setIsEntering(false)    // prevent Prompt and allow onAddQuote to navigate away
    onAddQuote({author: enteredAuthor, text: enteredText})
  }

  return (
    <>
      <Prompt when={isEntering} message={promptMessage}/>
      <Card>
        <form className={styles.form} onSubmit={submitFormHandler} onFocus={formFocusHandler}>
          {isLoading && <div className={styles.loading}><LoadingSpinner /></div>}

          <div className={styles.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={styles.actions}>
            <button type='submit' className='btn'>Add Quote</button>
          </div>
        </form>
      </Card>
    </>
  )
}

export default QuoteForm
