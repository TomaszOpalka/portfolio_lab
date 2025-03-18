import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Link as  ScrollLink} from 'react-scroll'
import { supabase } from './Client.jsx';


function Header() {
    const [user, setUser] = useState(null); 
  
    useEffect(() => {
      // Sprawdzamy, czy użytkownik jest zalogowany po załadowaniu komponentu
      const session = supabase.auth.getSession();
      setUser(session?.user ?? null); // Ustawiamy użytkownika, jeśli jest aktywna sesja
  
      // Nasłuchujemy zmiany stanu logowania
      const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
        setUser(session?.user ?? null); // Ustawiamy użytkownika w stanie, gdy zmienia się sesja
      });
  
  
    }, []); 
  
    const handleLogout = async () => {
      await supabase.auth.signOut(); 
    };

    return(
       <>
        <div className="header">
        <div className="header-topgroup">
        {user ? (
          <>
            <div>Witaj, {user.email}</div> 
            <Link to="/oddaj-rzeczy">
              <button className="btn-header">Oddaj rzeczy</button> 
            </Link>
            <button className="btn-header" onClick={handleLogout}>Wyloguj</button> {/*zrobić z tego Link i przerzucić na wylogowano pomyślnie0*/}
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
                <Link to="/"><li className="header-li">Start</li></Link>
                <ScrollLink className="header-li" to="steps">O co chodzi?</ScrollLink>
                <ScrollLink className="header-li" to="aboutus"> O nas </ScrollLink>
                <ScrollLink className="header-li" to="whowehelp"> Fundacja i organizacje </ScrollLink>
                <ScrollLink className="header-li" to='contact'> Kontakt </ScrollLink>
            </ul>
            </div>
        </div>
       </>
    )
}

export default Header;