import TrendingNowSingle from "./TrendingNowSingle";
import { Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";


const TrendingNowList = ({title}) =>{

    const [movies1 , setMovies1] = useState([])
    const [movies2 , setMovies2] = useState([])
    const [movies3 , setMovies3] = useState([])
    const [searchQuery , setSearchQuery] = useState('')
    const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    fetchMovies1();
    // fetchMovies2();
    // fetchMovies3();
  },[])
  

 const fetchMovies1 = async () => {
    try {
      let response = await fetch("https://www.omdbapi.com/?apikey=bf640f83&s=" + title);

      if (response.ok) {
        let data = await response.json();
        setMovies1({
          movies1: data.Search,
          isLoading: false,
        });
        console.log(movies1);
      } else {
        setIsLoading(false)
      }
    } catch (error) {
        setIsLoading(false)
    }
  };

  // const fetchMovies2 = async () => {
  //   try {
  //     let response = await fetch("https://www.omdbapi.com/?apikey=bf640f83&s="+ title);

  //     if (response.ok) {
  //       let data = await response.json();
  //       setMovies2({
  //         movies2: data.Search,
  //         isLoading: false,
  //       });
  //       console.log(movies2);
  //     } else {
  //       // if we fall here we're getting an error, maybe a 404
  //       setMovies2({
  //         isLoading: false,
  //         isError: true,
  //       });
  //     }
  //   } catch (error) {
  //     setMovies2({
  //       isLoading: false,
  //       isError: true,
  //     });
  //   }
  // };

  // const fetchMovies3 = async () => {
  //   try {
  //     let response = await fetch("https://www.omdbapi.com/?apikey=bf640f83&s=" + title);

  //     if (response.ok) {
  //       let data = await response.json();
  //       setMovies3({
  //         movies3: data.Search,
  //         isLoading: false,
  //       });
  //       console.log(movies3);
  //     } else {
  //       setMovies3({
  //         isLoading: false,
  //         isError: true,
  //       });
  //     }
  //   } catch (error) {
  //     setMovies3({
  //       isLoading: false,
  //       isError: true,
  //     });
  //   }
  // };


    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Search movies"
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery({ searchQuery: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
          </Row>
        </Container>

        <section>
          <div class="container-fluid mt-1 ml-6">
            <div class="mb-2">
              <h4 class="d-table-cell mb-0 text-light">Ice Age</h4>
            </div>

            <div class="row mx-n1 mb-lg-5">
              {isLoading && (
                <Spinner animation="border" variant="info" />
              )}
              {movies1.length>0 && movies1.slice(0 , 6)
                .map((res) => (
                  <TrendingNowSingle src={res.Poster} data={res} />
                ))}
            </div>
          </div>
        </section>

        {/* <section>
          <div class="container-fluid mt-1 ml-6">
            <div class="mb-2">
              <h4 class="d-table-cell mb-0 text-light">Lord Of The Rings</h4>
            </div>

            <div class="row mx-n1 mb-lg-5">
              {isLoading && (
                <Spinner animation="border" variant="info" />
              )}
              {movies2
                .filter((res) =>
                  res.Title.toLowerCase().includes(searchQuery)
                )
                .slice(0, 6)
                .map((res) => (
                  <TrendingNowSingle src={res.Poster} />
                ))}
            </div>
          </div>
        </section>

        <section>
          <div class="container-fluid mt-1 ml-6">
            <div class="mb-2">
              <h4 class="d-table-cell mb-0 text-light">The Avengers</h4>
            </div>

            <div class="row mx-n1 mb-lg-5">
              {isLoading && (
                <Spinner animation="border" variant="info" />
              )}
              {movies3.filter((res) =>
                  res.Title.toLowerCase().includes(searchQuery)).slice(0, 6).map((res) => (
                  <TrendingNowSingle src={res.Poster} />
                ))}
            </div>
          </div>
        </section> */}
      </div>
    );
  }


export default TrendingNowList;