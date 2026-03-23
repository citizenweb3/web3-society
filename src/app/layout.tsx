import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Freedom Forum | Citizen Web3',
  description:
    'We Believe Privacy is a Right - Join the Fight for Freedom. Privacy-focused community by Citizen Web3.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>The Freedom Forum | Citizen Web3</title>
        <script defer data-domain="privacy.citizenweb3.com" src="https://plausible.io/js/script.js"></script>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="description"
          content="We Believe Privacy is a Right - Join the Fight for Freedom. Privacy-focused community by Citizen Web3."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta
          name="keywords"
          content="privacy, freedom, digital rights, privacy validator, privacy community, Web3 privacy, Citizen Web3, privacy forum, decentralized privacy"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="The Freedom Forum | Citizen Web3" />
        <meta
          property="og:description"
          content="We Believe Privacy is a Right - Join the Fight for Freedom. Privacy-focused community by Citizen Web3."
        />
        <meta property="og:image" content="https://privacy.citizenweb3.com/cw3logo.png" />
        <meta property="og:url" content="https://privacy.citizenweb3.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Freedom Forum | Citizen Web3" />
        <meta
          name="twitter:description"
          content="We Believe Privacy is a Right - Join the Fight for Freedom. Privacy-focused community by Citizen Web3."
        />
        <meta name="twitter:image" content="https://privacy.citizenweb3.com/cw3logo.png" />
        <meta name="twitter:url" content="https://privacy.citizenweb3.com" />

        <link rel="canonical" href="https://privacy.citizenweb3.com/" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
