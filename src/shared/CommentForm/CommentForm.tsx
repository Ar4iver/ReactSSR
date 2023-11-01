import React, { ChangeEvent, FormEvent, useState } from 'react'
import styles from './styles/commentForm.scss'

export interface ICommentFormProps {
  username?: string
}

export const CommentForm = ({ username }: ICommentFormProps) => {
  const [value, setValue] = useState('')
  const [touched, setTouched] = useState(false)
  const [valueError, setValueError] = useState('')
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setTouched(true)

    setValueError(validateValue())

    const isFormValid = !validateValue()
    if (!isFormValid) return

    alert('Форма отправлена')
  }

  function validateValue() {
    if (value.length <= 3) return 'Введите больше 3-х символов'
    return ''
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        value={value}
        onChange={handleChange}
        aria-invalid={valueError ? 'true' : 'false'}
      />
      {touched && valueError && <div>{valueError}</div>}
      <button type="submit" className={styles.button}>
        Комментировать
      </button>
    </form>
  )
}
