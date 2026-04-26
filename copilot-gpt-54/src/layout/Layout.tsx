import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { siteMeta } from '../data/site';

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-canvas text-text">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-text focus:px-4 focus:py-3 focus:text-canvas"
        href="#main-content"
      >
        {siteMeta.skipLinkLabel}
      </a>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(68,190,202,0.16),_transparent_34%),radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.05),_transparent_24%)]" />
      <Navbar />
      <main id="main-content" className="pb-20 pt-28 sm:pt-32">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
