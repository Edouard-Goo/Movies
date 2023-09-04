import React from "react";

const Movie = ({ liste }) => {
  return (
    <>
      <div className="cards bg">
        {liste.map((oneMovie, i) => (
          <li className="card" key={i} style={{ listStyle: "none" }}>
            <h1 style={{ color: "whitesmoke", fontStyle: "italic" }}>
              {oneMovie.title}
            </h1>

            <figure className="abs">
              <img
                style={{
                  width: "100%",
                }}
                src={`https://image.tmdb.org/t/p/original/${oneMovie.backdrop_path}`}
                alt="movieBG"
              />
              <figcaption>
                <div className="data-container">
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <h2>Date de sortie :{oneMovie.release_date}</h2>
                    </li>
                    <li>
                      <h4>{oneMovie.vote_count} Votes</h4>
                    </li>
                    <li>
                      <h3 className="overview">{oneMovie.overview}</h3>
                    </li>
                    <li>
                      <h5 style={{ color: "yellow" }}>
                        Note moyenne : {oneMovie.vote_average}
                      </h5>
                    </li>
                  </ul>
                </div>
              </figcaption>
            </figure>
            <span>
              <img className="icons" src="heart.png" alt="" />
            </span>
            <span>
              <img className="icons" src="attach-file.png" alt="" />
            </span>
            <span>
              <img className="icons" src="surfing.png" alt="" />
            </span>
          </li>
        ))}
      </div>
    </>
  );
};

export default Movie;
