import React, { ChangeEvent, useState } from 'react'
import styles from './styles/commentForm.scss'
import { Controller, useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

export interface ICommentFormProps {
  username?: string
}

export const CommentForm = ({ username }: ICommentFormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    criteriaMode: 'all',
  })

  const [comment, setComment] = useState(`Привет, ${username}!`)

  const onSubmit = () => {
    alert('Форма отправлена')
  }

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="textAreaInput"
        control={control}
        rules={{ required: 'Вы не можете отправить пустой комментарий' }}
        defaultValue={comment}
        render={({ field }) => (
          <>
            <textarea
              placeholder="Введите комментарий"
              aria-invalid={errors.comment ? 'true' : 'false'}
              {...field}
              value={comment}
              {...register('textAreaInput', {
                minLength: {
                  value: 3,
                  message: 'Введите более 3-x символов',
                },
              })}
              onChange={handleCommentChange}
            />
            <ErrorMessage
              errors={errors}
              name="textAreaInput"
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <p key={type}>{message}</p>
                    ))
                  : null
              }}
            />
          </>
        )}
      />
      <button type="submit" className={styles.button}>
        Комментировать
      </button>
    </form>
  )
}
