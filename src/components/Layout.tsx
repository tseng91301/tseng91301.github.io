
import { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow pt-4">
        {children}
      </main>
      <footer className="py-6 text-center text-sm text-gray-500 bg-white border-t">
        <div className="container mx-auto">
          © {new Date().getFullYear()} K's Site | All Rights Reserved <br/>
          本網站由 lovable.ai 協助製作，目前有些頁面尚未完全開發，敬請見諒~
        </div>
      </footer>
    </div>
  );
};

export default Layout;
