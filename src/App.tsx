import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Blog from './views/Blog';
import Contact from './views/Contact';
import BlogTop from './components/BlogTop';
import Footer from './components/Footer';
import PostOne from './components/Posts/PostOne';
import PostTwo from './components/Posts/PostTwo';
import PostThree from './components/Posts/PostThree';

function App() {
  return (
    <Router>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<BlogTop />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/day1' element={<PostOne/>} />
          <Route path='/day2' element={<PostTwo/>} />
          <Route path='/day3' element={<PostThree/>} />
        </Routes>
        <div style={{ flex: '1', marginTop:'5vh' }}></div> {/* Add this div to push the footer to the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
