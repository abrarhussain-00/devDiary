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
      <br/><br/>
      {/* <PostThree/>
      <div style={{marginLeft:'5vh', marginRight:'5vh'}}>
      <LineGradient/>
      </div>
      <PostTwo/> */}
      <div style={{marginLeft:'10vh', marginRight:'10vh'}}>
      <b style={{ }}>Sorted Newest to oldest!</b>
        <LineGradient/>
      </div>
      <div>
        <PostOne/>
      </div>
    </div>
  )
}

export default Blog
