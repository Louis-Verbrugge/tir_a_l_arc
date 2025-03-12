import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Les Archers de la Cible d\'Or - Club de Tir à l\'Arc',
  description: 'Club de tir à l\'arc proposant des cours pour tous les niveaux, des entraînements et des compétitions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <MainNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}