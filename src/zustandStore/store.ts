import { create } from 'zustand'

interface CommentState {
  comments: { [key: string]: string }
  setCommentState: (key: string, comment: string) => void
}

export const useCommentStore = create<CommentState>((set) => ({
  comments: {},
  setCommentState: (key: string, comment: string) =>
    set((state) => ({
      comments: { ...state.comments, [key]: comment },
    })),
}))
