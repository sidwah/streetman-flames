import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Streetman Flames - Fresh Street Food You Love',
  description: "UPSA's favorite street food spot. Rice, fries, chicken & more. Pickup only at UPSA Behind Hostel C. Call 0257 743 913 to order!",
  keywords: [
    'Streetman Flames',
    'UPSA food',
    'street food Ghana',
    'Accra food',
    'jollof rice',
    'fried rice',
    'loaded fries',
    'chicken',
    'student food',
    'MOMO payment'
  ],
  authors: [{ name: 'Streetman Flames' }],
  creator: 'Streetman Flames',
  publisher: 'Streetman Flames',
  
  // Open Graph metadata for social media sharing
  openGraph: {
    type: 'website',
    locale: 'en_GH',
    url: 'https://streetmanflames.com', // Update with your actual domain
    siteName: 'Streetman Flames',
    title: 'Streetman Flames - Fresh Street Food You Love',
    description: "UPSA's favorite street food spot. Rice, fries, chicken & more. Pickup only!",
    images: [
      {
        url: '/images/og-image.jpg', // Your Open Graph image
        width: 1200,
        height: 630,
        alt: 'Streetman Flames - Fresh Street Food',
      },
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Streetman Flames - Fresh Street Food You Love',
    description: "UPSA's favorite street food spot. Rice, fries, chicken & more. Pickup only!",
    images: ['/images/og-image.jpg'],
    creator: '@streetmanfoods_gh',
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  
  // Manifest for PWA
  manifest: '/manifest.json', // Optional: Create this later
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}