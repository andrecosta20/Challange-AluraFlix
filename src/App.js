import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import CategorySection from './components/CategorySection/CategorySection';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const sampleVideos = [
    { title: 'Video 1', image: 'assets/images/FrontEnd.png' },
    { title: 'Video 2', image: 'assets/images/BackEnd.png' },
    { title: 'Video 3', image: 'assets/images/Mobile.png' }
  ];

  return (
    <Router>
      <Header />
      <Banner />
      <CategorySection title="Frontend" videos={sampleVideos} />
      <CategorySection title="Backend" videos={sampleVideos} />
      <CategorySection title="Mobile" videos={sampleVideos} />
      <Footer />
    </Router>
  );
}

export default App;
