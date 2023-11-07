import React, { useEffect } from 'react'
import styles from './cardslist.scss'
import { Card } from './Card/Card.tsx'
import { IPost, RootState } from '../../types/types.ts'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../store/slices/postsSlice.ts'

export function CardsList() {
  const dispatch = useDispatch<any>()
  const token = useSelector((state: RootState) => state.token.token)
  const loading = useSelector((state: RootState) => state.posts.loading)
  const postsData = useSelector((state: RootState) => state.posts.posts)
  useEffect(() => {
    if (token) {
      dispatch(fetchPosts(token))
    }
  }, [dispatch, token])

  return !loading ? (
    <>
      <ul className={styles.cardsList}>
        {postsData.map((post: IPost) => (
          <Card
            key={post.data.id}
            postId={post.data.id}
            title={post.data.sr_detail.title}
            previewImg={post.data.sr_detail.header_img}
            avatar={post.data.sr_detail.icon_img}
            username={post.data.sr_detail.name}
            content={post.data.sr_detail.description}
          />
        ))}
      </ul>
      <button
        onClick={() =>
          dispatch(fetchPosts({ token, after: postsData.after || null }))
        }
      >
        Показать еще
      </button>
    </>
  ) : (
    <h1>Загрузка постов...</h1>
  )
}
