import React, { useEffect, useState } from "react";
import Movie from "../Components/Movie";

const Movies = () => {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(1);
  const [btn, setBtn] = useState();

  const theClick = () => {
    if (setBtn) {
      setPages(pages + 1);
    }

    console.log("on y est");
  };

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    };

    // Permet de récupérer les données d'une API // Similaire à Axios
    // ATTENTION /!\ RESSOURCE EXTERNE, qui dit RESSOURCE EXTERNE DIT UN HOOK SPECIFIQUE, /!\
    // ATTENTION AUX BOUCLES INFINIES MEME SI CA FONCTIONNE

    fetch(
      `https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=${pages}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response.results);

        console.log("Test pour récupération de la Data ");
      })
      .catch((err) => console.error(err));
  }, [pages]);

  return (
    <>
      <div>
        <Movie liste={data} />
      </div>

      <button type="submit" onClick={theClick}>
        NEXT
      </button>
    </>
  );
};

export default Movies;
