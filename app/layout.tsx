// layout.tsx ou _app.tsx
import './styles/globals.css';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: '700', variable: '--font-heading' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}