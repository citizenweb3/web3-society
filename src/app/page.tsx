import Hero from '@/components/hero';
import SiteFooter from '@/components/footer';
import PrivacySpaces from '@/components/privacy-spaces';
import PrivacyPodcasts from '@/components/privacy-podcasts';
import PrivacyJoinFight from '@/components/privacy-join-fight';
import ScrollToTop from '@/components/scroll-to-top';
import Link from 'next/link';
import Image from 'next/image';

const wideBtnClass =
  'hover:no-underline relative py-4 px-12 md:py-5 md:px-20 font-bold inline-block text-lg md:text-2xl text-center bg-[#1A1A1B] rounded-[9px] hover:bg-[#ffffff]/15 cursor-pointer';

export default function Page() {
  return (
    <div className="min-h-dvh bg-[hsl(var(--background))]">
      <main>
        <Hero
          variant="home"
          title={'The Freedom Forum'}
          subtitle={'We Believe Privacy is a Right - Join the Fight for Freedom'}
        />
        <PrivacySpaces />
        <div className="py-4 md:py-8">
          <div className="max-w-[88vw] mx-auto flex justify-end">
            <Link
              href="https://staking.citizenweb3.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={wideBtnClass}
            >
              <Image
                src="/arrow.svg"
                alt="arrow"
                width={12}
                height={12}
                className="absolute top-3 right-3 w-3 h-auto"
              />
              Stake Bare-Metal!
            </Link>
          </div>
        </div>
        <PrivacyPodcasts />
        <div className="py-4 md:py-8">
          <div className="max-w-[88vw] mx-auto flex justify-end">
            <Link
              href="https://podcast.citizenweb3.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={wideBtnClass}
            >
              <Image
                src="/arrow.svg"
                alt="arrow"
                width={12}
                height={12}
                className="absolute top-3 right-3 w-3 h-auto"
              />
              CW3 Podcast
            </Link>
          </div>
        </div>
        <PrivacyJoinFight />
      </main>
      <SiteFooter />
      <ScrollToTop />
    </div>
  );
}
