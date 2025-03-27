import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { supabase } from "./Client"; // Ensure this path is correct
import Layout from "./Layout.jsx";


function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function checkSession() {
      // Pobieramy aktualną sesję użytkownika
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null); // Ustawiamy użytkownika, jeśli sesja istnieje
    }

    checkSession(); // Sprawdzamy sesję przy montowaniu komponentu

    // Nasłuchujemy zmian w stanie logowania
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null); // Aktualizacja stanu użytkownika
      }
    );

    return () => {
      listener?.subscription?.unsubscribe(); // Czyszczenie subskrypcji
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut(); // Wylogowanie użytkownika
    setUser(null); // Resetowanie stanu użytkownika
  };

  return (
    <div className="header">
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
      <div className="header-nav">
        <ul className="header-ul">
          <Link to="/">
            <li className="header-li">Start</li>
          </Link>
          <ScrollLink className="header-li" to="steps">
            O co chodzi?
          </ScrollLink>
          <ScrollLink className="header-li" to="aboutus">
            O nas
          </ScrollLink>
          <ScrollLink className="header-li" to="whowehelp">
            Fundacja i organizacje
          </ScrollLink>
          <ScrollLink className="header-li" to="contact">
            Kontakt
          </ScrollLink>
        </ul>
      </div>
    </div>
  );
}

export default Header;
