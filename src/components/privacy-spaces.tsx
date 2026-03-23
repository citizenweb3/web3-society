import { FC } from 'react';
import EpisodeCard from './episode-card';

const spaces = [
  {
    title: 'Privacy vs. Surveillance Nightmare',
    date: '11 April 2025',
    duration: '1:20:23',
    url: 'https://x.com/i/spaces/1vAGRQzlmVXKl',
  },
];

const PrivacySpaces: FC = () => (
  <section id="spaces" className="py-8 md:py-12">
    <div className="max-w-[80vw] mx-auto">
      <h2 className="mb-4 text-left text-2xl font-bold tracking-wide">The Freedom Forum Twitter/X Spaces</h2>
      <div className="w-full h-px bg-white/50 mb-8" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {spaces.map((space) => (
          <EpisodeCard
            key={space.url}
            title={space.title}
            date={space.date}
            duration={space.duration}
            url={space.url}
          />
        ))}
      </div>
    </div>
  </section>
);

export default PrivacySpaces;
