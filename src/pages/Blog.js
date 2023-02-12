import React, { useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Blog = () => {
  // State (état, données)
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  // Comportement
  const handleSubmit = (e) => {
    e.preventDefault();

    if(content.length < 140) {
        setError(true);
    } else {
        setError(false);
    }
  };

  // Affichage (render)
  return (
    <div className="blog-container">
      <Logo />
      <Navigation />
      <h1>Blog</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nom" />
        <textarea
        // Ajouter du style conditionnel
        style={{border: error ? "1px solid red" : "1px solid #61dafb"}}
          placeholder="Message"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        {error && <p>Veuillez écrire un minimun de 140 caractéres</p>}
        <input type="submit" value="Envoyer" />
      </form>
      <ul></ul>
    </div>
  );
};

export default Blog;
