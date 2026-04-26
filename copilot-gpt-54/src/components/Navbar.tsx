import { Menu, MoonStar, SunMedium, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navigation, siteMeta } from '../data/site';
import { profile } from '../data/profile';
import { useTheme } from '../hooks/useTheme';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen((currentState) => !currentState);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-line bg-surface/92 px-4 py-3 shadow-panel backdrop-blur-md sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <NavLink className="flex min-h-11 items-center gap-3 rounded-full pr-3 text-sm text-text" to="/">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-canvas font-display text-sm font-semibold tracking-[0.24em] text-accent">
              {siteMeta.monogram}
            </span>
            <span className="hidden sm:flex sm:flex-col">
              <span className="font-medium text-text">{profile.name}</span>
              <span className="text-xs uppercase tracking-[0.18em] text-muted">{profile.title}</span>
            </span>
          </NavLink>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                className={({ isActive }) =>
                  [
                    'rounded-full px-4 py-3 text-xs uppercase tracking-[0.16em] transition duration-200',
                    isActive ? 'bg-canvas text-text' : 'text-muted hover:text-text',
                  ].join(' ')
                }
                to={item.path}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label={theme === 'dark' ? siteMeta.themeToggleLabel.light : siteMeta.themeToggleLabel.dark}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-canvas text-text transition hover:border-accent hover:text-accent focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              onClick={toggleTheme}
              type="button"
            >
              {theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
            </button>
            <button
              aria-expanded={isOpen}
              aria-label={isOpen ? siteMeta.mobileMenuLabel.close : siteMeta.mobileMenuLabel.open}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-canvas text-text transition hover:border-accent hover:text-accent focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:hidden"
              onClick={toggleMenu}
              type="button"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <nav aria-label="Mobile" className="mt-4 grid gap-2 border-t border-line pt-4 md:hidden">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                className={({ isActive }) =>
                  [
                    'rounded-[1.25rem] px-4 py-3 text-sm transition duration-200',
                    isActive ? 'bg-canvas text-text' : 'text-muted hover:bg-canvas hover:text-text',
                  ].join(' ')
                }
                to={item.path}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}

export default Navbar;
