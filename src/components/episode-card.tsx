import { FC } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface OwnProps {
  title: string;
  date: string;
  duration: string;
  url: string;
  className?: string;
}

const EpisodeCard: FC<OwnProps> = ({ title, date, duration, url, className }) => (
  <Link
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={twMerge(
      'no-underline flex flex-col justify-between rounded-[20px] bg-[#1A1A1B] p-4 md:p-6 hover:bg-[#ffffff]/15 transition h-[8rem] md:h-[10rem]',
      className,
    )}
  >
    <span className="text-sm md:text-base font-light leading-snug">{title}</span>
    <div className="mt-3 text-xs md:text-sm text-[hsl(var(--muted))]">
      <span>{date} |</span>
      <span className="ml-2">{duration}</span>
    </div>
  </Link>
);

export default EpisodeCard;
