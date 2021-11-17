import { useEffect, useState } from "react";
import { useParams } from "react-router";

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const [comments, setComments] = useState([]);

  const params = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        let resp = await fetch(
          "https://www.omdbapi.com/?apikey=24ad60e9&i=" + params.movieID
        );
        if (resp.ok) {
          let data = await resp.json();
          setDetails(data);
        } else {
          console.log("error fetching details");
        }
      } catch (error) {
        console.log(error);
      }
    };
    const fetchComments = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            params.movieID,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MThkMDRlMDVmMzRhZDAwMTUzOWYxNmEiLCJpYXQiOjE2MzY2MzE3NzYsImV4cCI6MTYzNzg0MTM3Nn0.KZFRNSj2rC5xiYx41yAswGO03j15F5q_BblUESNwX6w"
            }
          }
        );
        if (response.ok) {
          let data = await response.json();
          setComments(data);
        } else {
          console.log("error fetching comments");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
    fetchComments();
  }, [params.movieID]);

  return (
    <div className="text-center text-white">
      {details && (
        <>
          <h2>{details.Title}</h2>
          <img src={details.Poster} alt="movie poster" />
          <ul style={{ listStyleType: "none" }}>
            {comments.map((movie) => (
              <li className="my-3" key={movie._id}>
                {movie.comment}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
