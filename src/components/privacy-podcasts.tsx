import { FC } from 'react';
import episodes from '@/data/privacy-episodes.json';
import EpisodeCard from './episode-card';

const PrivacyPodcasts: FC = () => (
  <section id="podcasts" className="py-8 md:py-12">
    <div className="max-w-[80vw] mx-auto">
      <h2 className="mb-4 text-left text-2xl font-bold tracking-wide">Privacy-focused Podcast Episodes</h2>
      <div className="w-full h-px bg-white/50 mb-8" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {episodes.map((episode) => (
          <EpisodeCard
            key={episode.slug}
            title={episode.title}
            date={episode.date}
            duration={episode.duration}
            url={episode.url}
          />
        ))}
      </div>
    </div>
  </section>
);

export default PrivacyPodcasts;
