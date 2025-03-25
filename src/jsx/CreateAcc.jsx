import React, { useState } from 'react';
// import Header from "./Header.jsx";
import Header from "../Header.jsx";
import { supabase } from './Client.jsx';
import { Link } from 'react-router-dom';

function CreateAcc() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.password.length < 6) {
      setErrorMessage('Hasło musi mieć co najmniej 6 znaków');
      return;
    }

    try{
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    })
    alert('sprawdź swój email w celu weryfikacji')
  }catch (error){
    alert(error)
  }
  }

  return (
    <>
      <Header />
      <div id="createacc" className="login-createacc">
        <h1>Formularz rejestracji</h1>
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
               {errorMessage && <h6 className="error-message">{errorMessage}</h6>}
            </label>

            <label>
              Powtórz hasło
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </label>
            <button className='btn-creatacc' type="submit" >Załóż konto</button>
            <Link to="/login"><button className="btn-login">Zaloguj</button></Link>
          </form>
        </div>
            
      </div>
    </>
  );
}

export default CreateAcc;
