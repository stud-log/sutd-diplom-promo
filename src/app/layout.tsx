import '@/app/styles/index.scss';

import { Footer } from '@/widgets/Blocks';
import { HeaderMenu } from "@/widgets/HeaderMenu";
import { Metadata } from 'next';
import { MobileMenu } from '@/widgets/MobileMenu';
import { ReactNode } from "react";
import { ReduxProvider } from "./providers/ReduxProvider";

interface Props {
  readonly children: ReactNode;
}
 
export const metadata: Metadata = {
  metadataBase: new URL('https://promo.studlog.ru'),
  title: 'Stud.log Promo',
  description: "Студенческий портал",
  openGraph: {
    title: 'Promo Stud.log',
    description: "Студенческий портал",
    siteName: 'Stud.log',
    url: 'https://promo.studlog.ru',
    images: [ {
      url: '/android-chrome-192x192.png'
    } ]
  }
};

export default function RootLayout({ children }: Props) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body>
          <MobileMenu />
          <div className="wrapper">
            <header>
              <HeaderMenu />
            </header>
            <main>
              {children}
            </main>
            <footer>
              <Footer />
            </footer>
          </div>
        </body>
      </html>
    </ReduxProvider>
  );
}