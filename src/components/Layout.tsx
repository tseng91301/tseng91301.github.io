
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
          © {new Date().getFullYear()} My Site | All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default Layout;
