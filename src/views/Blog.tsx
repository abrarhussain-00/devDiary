import React from 'react'
import Title from '../components/Title'
import LineGradient from '../components/LineGradient'
import PostOne from '../components/Posts/PostOne'
import PostTwo from '../components/Posts/PostTwo'
import PostThree from '../components/Posts/PostThree'

const Blog = () => {
  return (
    <div>
      <Title/>
      {/* <PostThree/>
      <LineGradient/>
      <PostTwo/> */}
      <div style={{marginLeft:'5vh', marginRight:'5vh'}}>
        <LineGradient/>
      </div>
      <PostOne/>
    </div>
  )
}

export default Blog