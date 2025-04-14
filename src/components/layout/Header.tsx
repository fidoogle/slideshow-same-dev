import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

import Logo from '@/assets/logo.svg';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="py-4 border-b border-gray-800 relative z-50 bg-[#0d0d13] dark:bg-[#0d0d13]">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} alt="SlideShowBoss Logo" className="h-10 w-10" />
            <span className="text-xl font-semibold">SlideShowBoss</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/features" className="text-sm text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link to="/pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link to="/how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">
            How It Works
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button className="gradient-bg" asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle Mobile Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0d0d13] dark:bg-[#0d0d13] border-b border-gray-800 py-4 px-6 z-50">
          <nav className="flex flex-col gap-4">
            <Link
              to="/features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              How It Works
            </Link>
            <div className="flex flex-col gap-3 mt-4">
              <Button variant="outline" asChild className="w-full">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  Login
                </Link>
              </Button>
              <Button className="gradient-bg w-full" asChild>
                <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
