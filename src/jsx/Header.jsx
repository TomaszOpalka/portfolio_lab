import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { supabase } from "../jsx/Client";
import Layout from "./Layout.jsx";

function Header() {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    async function checkSession() {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    }

    checkSession();

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      listener?.subscription?.unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-topgroup">
        {user ? (
          <>
            <div className="welcome-user">Witaj, {user.email}</div>
            <Link to="/oddaj-rzeczy">
              <button className="btn-header">Oddaj rzeczy</button>
            </Link>
            <button className="btn-header" onClick={handleLogout}>
              Wyloguj
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="btn-header login">Zaloguj</button>
            </Link>
            <Link to="/createAcc">
              <button className="btn-header register">Załóż konto</button>
            </Link>
          </>
        )}
      </div>

      <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
        <ul className="header-ul">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <li className="header-li">Start</li>
          </Link>
          <ScrollLink className="header-li" to="steps" onClick={() => setIsMenuOpen(false)}>
            O co chodzi?
          </ScrollLink>
          <ScrollLink className="header-li" to="aboutus" onClick={() => setIsMenuOpen(false)}>
            O nas
          </ScrollLink>
          <ScrollLink className="header-li" to="whowehelp" onClick={() => setIsMenuOpen(false)}>
            Fundacja i organizacje
          </ScrollLink>
          <ScrollLink className="header-li" to="contact" onClick={() => setIsMenuOpen(false)}>
            Kontakt
          </ScrollLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;