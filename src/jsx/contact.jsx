import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState([]);
  const [feedback, setFeedback] = useState("");

  const validateForm = () => {
    const newErrors = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name || formData.name.split(" ").length > 1) {
      newErrors.push("Imię powinno być jednym wyrazem.");
    }
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.push("Email jest niepoprawny.");
    }
    if (!formData.message || formData.message.length < 120) {
      newErrors.push("Wiadomość musi mieć co najmniej 120 znaków.");
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Zapobiega przeładowaniu strony
    setFeedback("");
    setErrors([]);

    if (!validateForm()) return;

    try {
      const response = await fetch(
        "https://fer-api.coderslab.pl/v1/portfolio/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.status === "success") {
          setFeedback("Wiadomość została pomyślnie wysłana!");
          setFormData({ name: "", email: "", message: "" });
        }
      } else if (response.status === 400) {
        const errorData = await response.json();
        setErrors(errorData.errors || ["Wystąpił błąd walidacji."]);
      }
    } catch (error) {
      setFeedback("Wystąpił błąd. Spróbuj ponownie później.");
    }
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-img">
        <img
          className="contact-background"
          src="src/assets/Background-Contact-Form.jpg"
          alt="Background"
        />
      </div>
      <div className="contact-form">
        <h1>Skontaktuj się z nami</h1>
        <img
          className="contact-decoration"
          src="src/assets/Decoration.svg"
          alt="Decoration"
        />

        <form className="contact-form-form" onSubmit={handleSubmit}>
          <div className="form-position">
            <label className="form-name">
              <h4>Wpisz swoje imię</h4>
              <input
                name="name"
                placeholder="Krzysztof"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label className="form-mail">
              <h4>Wpisz swój email</h4>
              <input
                name="email"
                type="email"
                placeholder="abc@xyz.pl"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <label className="form-textarea">
            <h4>Wpisz swoją wiadomość</h4>
            <textarea
              name="message"
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </label>
          <div className="contact-btn">
            <br />
            <button type="submit" className="btn-send">
              Wyślij
            </button>
          </div>
        </form>

        {errors.length > 0 && (
          <ul className="errors">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}

        {feedback && <p className="feedback">{feedback}</p>}
      </div>

      <div className="copyright-media">
        <p>Copyright by Coders Lab</p>
        <img src="src/assets/Facebook.svg" alt="Facebook" />
        <img src="src/assets/Instagram.svg" alt="Instagram" />
      </div>
    </div>
  );
}

export default Contact;
