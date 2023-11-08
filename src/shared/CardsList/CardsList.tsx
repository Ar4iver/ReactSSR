import React, { useEffect } from 'react'
import styles from './cardslist.scss'
import { Card } from './Card/Card.tsx'
import { IPost, RootState } from '../../types/types.ts'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../store/slices/postsSlice.ts'
import { Outlet } from 'react-router-dom'

export function CardsList() {
  const dispatch = useDispatch<any>()
  const token = useSelector((state: RootState) => state.token.token)
  const loadingPosts = useSelector((state: RootState) => state.posts.loading)
  const postsData = useSelector((state: RootState) => state.posts.posts)
  const after = useSelector((state: RootState) => state.posts.after)

  useEffect(() => {
    if (token) {
      dispatch(fetchPosts({ token, after }))
    }
  }, [dispatch, token])

  const handleFetchMorePosts = () => {
    dispatch(fetchPosts({ token, after }))
  }

  console.log(postsData)

  return (
    <div className={styles.wrapperList}>
      <ul className={styles.cardsList}>
        {postsData.map((post: IPost) => (
          <Card
            key={post.id}
            postId={post.id}
            title={post.sr_detail.title}
            previewImg={post.sr_detail.header_img}
            avatar={post.sr_detail.icon_img}
            username={post.sr_detail.name}
            content={post.sr_detail.description}
          />
        ))}
      </ul>
      {loadingPosts && <h1>Загрузка постов...</h1>}
      {postsData.length != 0 && !loadingPosts && (
        <button
          className={styles.moreLoadingButton}
          onClick={handleFetchMorePosts}
        >
          Показать еще
        </button>
      )}
      <Outlet />
    </div>
  )
}
