import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import styles from './styles/commentForm.scss'
import { commentContext } from '../context/commentContext.ts'
import { useStore } from 'react-redux'
import { someState } from '../../store/createStore.ts'

export interface ICommentFormProps {
  username?: string
}

export const CommentForm = ({ username }: ICommentFormProps) => {
  const store = useStore<someState>()
  const text = store.getState().commentText
  console.log(text)
  const { onChange } = useContext(commentContext)
  // const [text, setText] = useState(username ? `${username}, ` : '')

  const ref = useRef<HTMLTextAreaElement>(null)
  // useEffect(() => {
  //   if (ref.current) {
  //     ref.current.focus()
  //     const length = text.length
  //     ref.current.setSelectionRange(length, length)
  //   }
  // }, [])

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    // setText(event.target.value)
    onChange(event.target.value)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        ref={ref}
        className={styles.input}
        value={text}
        onChange={handleChange}
      />
      <button type="submit" className={styles.button}>
        Комментировать
      </button>
    </form>
  )
}
