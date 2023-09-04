import React, { useEffect, useState } from "react";
import Movie from "../Components/Movie";

const Movies = () => {
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
      "https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=3",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response.results);

        console.log("Test pour récupération de la Data ");
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div>
        <Movie liste={data} />
      </div>
    </>
  );
};

export default Movies;
