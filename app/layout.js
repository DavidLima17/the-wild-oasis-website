import { Josefin_Sans } from 'next/font/google';
import '@/app/_styles/globals.css';
import Header from './_components/Header';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  // title: 'The Wild Oasis',
  title: {
    template: '%s / The Wild Oasis',
    default: 'Welcome / The Wild Oasis',
  },
  description: 'The Wild Oasis is a place to relax and enjoy nature.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} relative antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl  mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}

