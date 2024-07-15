import React from 'react';
import './CategorySection.css';
import frontEndCategoryImage from '../../assets/images/CategoryFront.png';
import backEndCategoryImage from '../../assets/images/BackEnd.png';
import mobileCategoryImage from '../../assets/images/Mobile.png';

const CategorySection = ({ title, videos }) => {
  let categoryImage;

  switch (title) {
    case 'Frontend':
      categoryImage = frontEndCategoryImage;
      break;
    case 'Backend':
      categoryImage = backEndCategoryImage;
      break;
    case 'Mobile':
      categoryImage = mobileCategoryImage;
      break;
    default:
      categoryImage = frontEndCategoryImage;
  }

  return (
    <section className="category-section">
      <h2 className="category-title">
        <img src={categoryImage} alt={title} className="category-image" />
      </h2>
      <div className="videos-container">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <img src={video.image} alt={video.title} className="video-image" />
            <p className="video-title">{video.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
