'use client';

import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BlockTitle from '@/components/block-title';

const shareUrl = 'https://privacy.citizenweb3.com';
const shareText = 'We Believe Privacy is a Right - Join the Fight for Freedom!';

const wideBtnClass =
  'hover:no-underline relative py-4 px-12 md:py-5 md:px-20 font-bold block text-lg md:text-2xl text-center bg-[#1A1A1B] rounded-[9px] hover:bg-[#ffffff]/15 cursor-pointer';

const shareLinks = [
  {
    label: 'Twitter/X',
    href: `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
  },
  {
    label: 'Telegram',
    href: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
  },
  {
    label: 'Reddit',
    href: `https://www.reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`,
  },
  {
    label: 'Facebook',
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
  },
];

const PrivacyJoinFight: FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <section id="join" className="py-8 md:py-12">
      <div className="max-w-[80vw] mx-auto">
        <h2 className="mb-4 text-left text-2xl font-bold tracking-wide">Join the Fight!</h2>
        <div className="w-full h-px bg-white/50 mb-8" />

        <div className="text-base md:text-xl font-light leading-10 tracking-[0.05em]">
          <p>
            If you&apos;re passionate about Privacy like us - join the fight and make Privacy cool again! Share this
            page with others on your socials:
          </p>
        </div>

        <div className="flex justify-end mt-8">
          <button onClick={() => setIsOpened(true)} className={wideBtnClass}>
            <Image src="/arrow.svg" alt="arrow" width={12} height={12} className="absolute top-3 right-3 w-3 h-auto" />
            Share
          </button>
        </div>
      </div>

      {isOpened && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4"
          onClick={() => setIsOpened(false)}
        >
          <div className="bg-[#111113] rounded-2xl p-10 md:p-14" onClick={(e) => e.stopPropagation()}>
            <BlockTitle title="Share The Freedom Forum" />
            <div className="grid grid-cols-2 gap-4 mt-8">
              {shareLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
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
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PrivacyJoinFight;
