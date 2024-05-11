import '@/app/styles/index.scss';

import { Footer } from '@/widgets/Blocks';
import { HeaderMenu } from "@/widgets/HeaderMenu";
import { ReactNode } from "react";
import { ReduxProvider } from "./providers/ReduxProvider";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body>
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