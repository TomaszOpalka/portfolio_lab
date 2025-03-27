import { useState } from 'react';
import Header from '/src/jsx/Header.jsx';
import { supabase } from './Client.jsx';
import { Link, useNavigate } from 'react-router-dom';
import Decoration from '@/assets/Decoration.svg';


function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState(''); // Dodano przechowywanie błędów
  const navigate = useNavigate(); // Hook do nawigacji

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        setErrorMessage("Błąd logowania: " + error.message); // Wyświetl komunikat błędu
        return;
      }

      console.log('Zalogowano:', data.user);
      navigate('/oddaj-rzeczy'); // Przekierowanie po poprawnym logowaniu
    } catch (err) {
      setErrorMessage("Wystąpił błąd: " + err.message); // Obsługa błędów
    }
  }

  return (
    <>
      <Header />
      <div id="login" className="login-createacc">
        <h1>Formularz logowania</h1>
        <img className="login-createacc-decoration" src={Decoration} alt="Decoration" />
        <div className="grey-login">
          <form onSubmit={handleSubmit}>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Hasło
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>
            {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Wyświetlenie błędu */}
            <button type="submit" className='btn-creatacc'>Zaloguj się</button>
            <Link to="/createAcc">
              <button type="button" className="btn-login">Załóż konto</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
