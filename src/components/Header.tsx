
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Home, Gamepad, Code, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', name: '首頁', icon: <Home className="h-4 w-4 mr-2" /> },
    { path: '/tools', name: '小工具', icon: <Settings className="h-4 w-4 mr-2" /> },
    { path: '/games', name: '小遊戲', icon: <Gamepad className="h-4 w-4 mr-2" /> },
    { path: '/projects', name: '我的專案', icon: <Code className="h-4 w-4 mr-2" /> }
  ];

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
          K's Site
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "flex items-center text-sm font-medium hover:text-primary transition-colors",
                location.pathname === link.path 
                  ? "text-primary" 
                  : "text-gray-600"
              )}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "flex items-center px-2 py-1.5 rounded-md hover:bg-muted transition-colors",
                    location.pathname === link.path
                      ? "bg-muted text-primary"
                      : "text-gray-600"
                  )}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
