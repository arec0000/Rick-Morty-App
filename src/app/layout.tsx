import { Roboto, Karla } from 'next/font/google';
import clsx from 'clsx';

import { Header } from '@/widgets/header';
import { ContentContainer } from '@/shared/ui';
import { Footer } from '@/widgets/footer';

import './reset.css';
import classes from './layout.module.scss';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-main',
});

const karla = Karla({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-secondary',
});

export const metadata = {
  title: 'Rick & Morty App',
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ru" className={clsx(roboto.variable, karla.variable)}>
      <body>
        <div className={classes.rootLayout}>
          <Header />
          <ContentContainer>
            {children}
          </ContentContainer>
          <Footer />
        </div>
      </body>
    </html>
  );
}
