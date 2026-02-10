import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Writing.css';

const ArticleImage = ({ src, alt }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="article-image">
      {!imageError ? (
        <img 
          src={src} 
          alt={alt}
          onError={() => setImageError(true)}
          loading="lazy"
        />
      ) : (
        <div className="image-placeholder">
          <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" fill="#f3f4f6" />
            <circle cx="200" cy="80" r="40" fill="#d1d5db" />
            <rect x="80" y="150" width="240" height="80" rx="8" fill="#d1d5db" />
            <rect x="100" y="170" width="200" height="12" rx="2" fill="#e5e7eb" />
            <rect x="100" y="190" width="180" height="12" rx="2" fill="#e5e7eb" />
          </svg>
          <span>{alt}</span>
        </div>
      )}
    </div>
  );
};

const Writing = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const articles = [
    {
      title: 'Another Boring Graduation Story',
      description: 'A post where I pretend to be nostalgic about my lost college days and that weird feeling you get when you graduate in the middle of a pandemic. (Sure, we had a lot of time to prepare about it, right ?)',
      image: '/assets/img/portfolio0.png',
      link: 'https://sanghamitra427699292.wordpress.com/2021/07/15/another-boring-graduation-story/'
    },
    {
      title: 'Dear Class of 2021',
      description: 'A letter dedicated to all graduates of 2021. P.S - Why did the Class of 2020 get so much love and affection ? SERIOUSLY, WHYY?',
      image: '/assets/img/portfolio1.png',
      link: 'https://sanghamitra427699292.wordpress.com/2021/07/15/another-boring-graduation-story/'
    },
    {
      title: 'A week in Quarantine',
      description: 'A post describing my typical week in quarantine - attempting to clean my house, with buckets of muddy water or watching the sea of humanity from my bedroom window.',
      image: '/assets/img/portfolio2.png',
      link: 'https://sanghamitra427699292.wordpress.com/2020/07/16/a-week-in-quarantine/'
    },
    {
      title: 'Decade End Ramblings',
      description: 'A post where I reflect about the year that was on the last day of 2019. Note - This episode almost feels weirdly prophetic-like after all that has happened in 2020.',
      image: '/assets/img/portfolio3.png',
      link: 'https://sanghamitra427699292.wordpress.com/2019/12/30/decade-end-ramblings/'
    },
    {
      title: 'The Elite Club',
      description: 'Aaah, the elite club, a club where some of us want to get into but only a few can actually get in. A post where I imagine a mythical elite club and make my imagination run wild.',
      image: '/assets/img/portfolio4.png',
      link: 'https://sanghamitra427699292.wordpress.com/2018/10/26/the-elite-club/'
    },
  ];

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + articles.length) % articles.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % articles.length);
  };

  const visibleArticles = [
    articles[activeIndex],
    articles[(activeIndex + 1) % articles.length],
  ];

  return (
    <section id="writing" className="writing section">
      <div className="container">
        <h2 className="section__title">Writing</h2>
        <p className="section__subtitle">Most Recent Work</p>

        <div className="writing-carousel">
          <div className="carousel-items">
            {visibleArticles.map((article, index) => (
              <div
                key={index}
                className={`carousel-item card ${index === 0 ? 'active' : ''}`}
              >
                <a 
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-link"
                >
                  <ArticleImage src={article.image} alt={article.title} />
                </a>
                <div className="article-content">
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-description">{article.description}</p>
                  <a 
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="article-link-btn"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-controls">
            <button 
              className="carousel-btn prev"
              onClick={handlePrevious}
              aria-label="Previous article"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="carousel-btn next"
              onClick={handleNext}
              aria-label="Next article"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="carousel-indicators">
            {articles.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to article ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Writing;
