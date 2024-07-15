import React from 'react';
import './Banner.css';
import bannerImage from '../../assets/images/BannerMain.png';

const Banner = () => {
  return (
    <section className="banner">
      <img src={bannerImage} alt="Banner" className="banner-image" />
    </section>
  );
};

export default Banner;
