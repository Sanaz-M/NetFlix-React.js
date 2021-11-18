import { Link } from 'react-router-dom'
import MyNavBar from './MyNavBar';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TvShows = () => {

  const [tvShows, setTvShows] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    fetchMovies();
  })

  const fetchMovies = async () => {
    try {
      let response = await fetch("https://www.omdbapi.com/?apikey=bf640f83&s=dark");

      if (response.ok) {
        let data = await response.json();
        setTvShows({
          tvShows: data.Search,

        });
        console.log(tvShows);
      } else {
        console.log("sth wrong")
      }
    } catch (error) {
      console.log(error)
    }

  }
return(
  <>
  <Container>
    <Row>
      <Col>
      <h1 className="text-white">Hello</h1>
      </Col>
    </Row>
  </Container>
  </>
)


    }


export default TvShows;