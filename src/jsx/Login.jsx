import React, { useState } from 'react';
import Header from './Header.jsx';
import { supabase } from './Client.jsx';
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });
    console.log('Dane formularza:', formData);
    if (error) {
      alert("Błąd logowania: " + error.message); // Obsługa błędów logowania
    } else {
      // Użytkownik jest zalogowany, w Header odświeżymy dane
      console.log('Zalogowano:', data.user);
    }
  }

  return (
    <>
      <Header />
      <div id="login" className="login-createacc">
        <h1>Formularz logowania</h1>
        <img className="login-createacc-decoration" src="src\assets\Decoration.svg" alt="Decoration" />
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
            <button type="submit" className='btn-creatacc'>Zaloguj się</button>
            <Link to="/createAcc"><button className="btn-login">Załóż konto</button></Link>
          </form>
        </div>
        
      </div>
    </>
  );
}

export default Login;
