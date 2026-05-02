import React from 'react';
import HeroBanner from '../components/HeroBanner';
import Categories from '../components/Categories';
import Courses from '../components/Courses';
import About from '../components/About';
import VideoSection from '../components/VideoSection';
import WhyChooseUs from '../components/WhyChooseUs';
import FunFacts from '../components/FunFacts';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Blog from '../components/Blog';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Categories />
      <Courses />
      <About />
      <VideoSection />
      <WhyChooseUs />
      <FunFacts />
      <Testimonials />
      <Team />
      <Blog />
      <Newsletter />
    </>
  );
};

export default Home;
