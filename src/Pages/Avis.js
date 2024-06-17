import React, { useEffect, useState } from "react";

const Avis = ({ result, setResult }) => {
  const [array, setArray] = useState([]);
  const [btn, setBtn] = useState(false);
  const [filmChoisi, setFilmChoisi] = useState("");
  const [username, setUsername] = useState("");
  const [avis, setAvis] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmE0YjkxYmNjNGZiMmMyZDk1NGFlZjlkMmViMmU0NCIsInN1YiI6IjY0ZjBmZWZjM2E5OTM3MDExY2JkZDZiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sPjp8MlpHbSaX30XcjKyPlVcmv8-_N50jApvjq4x7bg",
      },
    };

    // Permet de récupérer les données d'une API // Similaire à Axios
    // ATTENTION /!\ RESSOURCE EXTERNE, qui dit RESSOURCE EXTERNE DIT UN HOOK SPECIFIQUE, /!\
    // ATTENTION AUX BOUCLES INFINIES MEME SI CA FONCTIONNE

    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=2",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response.results);

        console.log("Test pour récupération de la Data ");
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFilmChoisi("");
    setUsername("");
    setAvis("");
  };

  const handleClick = (e) => {
    const infos = {
      user: username,
      review: avis,
      movie: filmChoisi,
    };

    if (username === "" && avis === "") {
      alert("Please enter a valid value");
    } else if (parseInt(username) && parseInt(avis)) {
      alert("Please enter a valid value");
    } else {
      array.push(infos);
      localStorage.setItem("tableau", JSON.stringify(array));
    }

    // console.log(infos);
  };

  const handleChange = (e) => {
    if (e.target.name === "user") {
      setUsername(e.target.value);
    }
    if (e.target.name === "movie") {
      setFilmChoisi(e.target.value);
    }
    if (e.target.name === "review") {
      setAvis(e.target.value);
    }

    // console.log("handlechange");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={username}
          className="inputName frm"
          type="text"
          name="user"
          placeholder="Saisie ton prénom"
        />
        <textarea
          onChange={handleChange}
          value={avis}
          className="txtArea frm"
          name="review"
          cols="40"
          rows="3"
          placeholder="Saisie ton avis"
        ></textarea>

        <select
          className="slct frm"
          value={filmChoisi}
          name="movie"
          onChange={handleChange}
        >
          <option value=" ">...</option>
          {data.map((oneMovie, i) => (
            <option key={i} value={oneMovie.title}>
              {oneMovie.title}
            </option>
          ))}
          
        </select>
        <button
          className="btn frm"
          type="submit"
          value={btn}
          onClick={handleClick}
        >
          Envoyer
        </button>
      </form>
    </>
  );
};

export default Avis;
