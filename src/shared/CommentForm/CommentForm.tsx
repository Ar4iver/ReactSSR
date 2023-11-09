import React, { ChangeEvent, useEffect, useState } from 'react'
import styles from './styles/commentForm.scss'
import { Controller, useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { useCommentStore } from '../../zustandStore/store.ts'

interface ICommentFormProps {
  postId: string
  username: string
}

export const CommentForm = ({ postId, username }: ICommentFormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    criteriaMode: 'all',
    defaultValues: {
      textAreaInput: `Привет, ${username}`,
    },
  })

  const { comments, setCommentState } = useCommentStore()

  const onSubmit = () => {
    alert('Форма отправлена')
  }

  useEffect(() => {
    setCommentState(postId, `Привет, ${username}!`)
  }, [postId, username, setCommentState])

  const comment = comments[postId] || ''

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentState(postId, e.target.value)
    console.log(comments)
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
              // aria-invalid={errors.comment ? 'true' : 'false'}
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
