import React from 'react'
import Title from '../components/Title';
import NavBar from '../components/NavBar';
import BlogTop from '../components/BlogTop';

const Home = () => {
  return (
    <div style={{backgroundColor:'yellow'}}>
        <NavBar/>
        <Title/>
        <BlogTop/>
    </div>
  )
}

export default Home