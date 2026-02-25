import './globals.css';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Projeto Percurso Pipa – Acompanhamento de Engenharia',
  description: 'Sistema corporativo da Viana e Moura para acompanhamento de obras.',
  manifest: '/manifest.json',
  themeColor: '#B73239',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="app-container">
          <Sidebar />
          <main className="content-area">
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}

