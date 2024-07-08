import DefaultLayout from '@/components/Layouts/DefaultLayout'
import AddPost from '@/components/Posts/AddPost'
import React from 'react'

function PostPage() {
  return (
    <DefaultLayout>
        <AddPost />
    </DefaultLayout>
  )
}

export default PostPage