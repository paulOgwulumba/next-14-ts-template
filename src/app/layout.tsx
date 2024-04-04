import { Inter } from 'next/font/google';
import 'react-loading-skeleton/dist/skeleton.css';
import '../global-style/global.scss';
import RecoilContextProvider from '@/providers/recoil-provider';
import { Toaster } from 'react-hot-toast';
import { Metadata } from 'next';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-limu VAS',
  description: 'E-limu VAS',
  keywords: 'E-limu VAS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <RecoilContextProvider>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'use-credentials'} />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400;1,9..40,500;1,9..40,600;1,9..40,700&family=Montserrat:wght@400;500;600;700&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className={inter.className}>
          {children}
          <Toaster />
        </body>
      </RecoilContextProvider>
    </html>
  );
}
