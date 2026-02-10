import React from 'react';
import { Music } from 'lucide-react';
import './Podcasts.css';

const Podcasts = () => {
  const platforms = [
    {
      name: 'Spotify',
      icon: Music,
      url: 'https://open.spotify.com/show/1ESmgkNRIjJYvg0k7RhLUd',
      color: '#1DB954'
    },
    {
      name: 'Anchor',
      icon: Music,
      url: 'https://anchor.fm/kaleidoscope-everchanging',
      color: '#7c3aed'
    },
  ];

  return (
    <section id="podcasts" className="podcasts section">
      <div className="container">
        <h2 className="section__title">Podcasts</h2>
        <p className="section__subtitle">Kaleidoscope - Ever Changing</p>

        <div className="podcasts-content">
          <div className="podcast-player">
            <iframe 
              className="embed-player"
              src="https://anchor.fm/kaleidoscope-everchanging/embed" 
              height={102}
              width="100%"
              frameBorder="0"
              scrolling="no"
              title="Kaleidoscope Podcast"
            />
          </div>

          <div className="podcast-info">
            <h3>Where to Listen</h3>
            <div className="platform-links">
              {platforms.map((platform) => {
                const Icon = platform.icon;
                return (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="platform-link"
                    style={{ '--accent-color': platform.color }}
                  >
                    <Icon size={24} />
                    <span>{platform.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Podcasts;
