import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Post } from '../Post/Post.tsx'
import { CardsList } from '../CardsList/CardsList.tsx'
import Page404 from '../pages/404Page/Page404.tsx'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/posts" replace />} />
      <Route path="/posts" element={<CardsList />}>
        <Route path=":id" element={<Post />} />
      </Route>
      <Route path="/auth" element={<Navigate to="/posts" replace />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}
