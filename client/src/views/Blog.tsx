import React from 'react'
import PostOne from '../components/Posts/PostOne'
import PostTwo from '../components/Posts/PostTwo'
import PostThree from '../components/Posts/PostThree'

const Blog = () => {
  return (
    <div>
      <PostThree/>
      <PostTwo/>
      <PostOne/>
    </div>
  )
}

export default Blog