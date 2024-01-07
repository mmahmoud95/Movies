import { useSelector, useDispatch } from "react-redux";
// import { changeFavorites } from "../store/slices/moviesFavs";
import { useEffect } from "react";
import { instance } from "../axios/instance";
import { Container, Row, Col } from "react-bootstrap";
import { ImBin } from "react-icons/im";
import { removeFavorites } from "../store/slices/moviesFavs";

import Card from "react-bootstrap/Card";

import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";

export const Favorites = () => {
    const navigate = useNavigate();
    const favorites = useSelector((state) => state.favorites.favorites);
    const dispatch = useDispatch();

    useEffect(() => {
        instance
            .get("popular")
            .then((res) => {})
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const favoriteRemove = (movie) => {
        dispatch(removeFavorites(movie));
    };

    return (
        <Container>
            <Row gap={2} className='mt-5'>
                {favorites.length == 0 ? (
                    <h1>You are not add any movie to favorites yet</h1>
                ) : (
                    favorites.map((movie, index) => {
                        {
                            return (
                                <Col
                                    className='mb-5'
                                    key={index}
                                    md={3}
                                    sm={4}
                                    xs={6}
                                >
                                    <Card className=''>
                                        <Card.Img className="link-hover"
                                            onClick={() => {
                                                navigate(`/movie/${movie.id}`);
                                            }}
                                            variant='top'
                                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                        />
                                        <Card.Body>
                                            <Card.Title>
                                                {movie.title}
                                                <span
                                                    className='link-hover text-nowrap overflow-hidden p-0'
                                                    onClick={() =>
                                                        favoriteRemove(movie)
                                                    }
                                                >
                                                    {<ImBin />}
                                                </span>
                                            </Card.Title>
                                        </Card.Body>
                                        <ListGroup className='list-group-flush'>
                                            <ListGroup.Item>
                                                Rating: {movie.vote_average}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Releas Date :{" "}
                                                {movie.release_date}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Language :{" "}
                                                {movie.original_language}
                                            </ListGroup.Item>
                                        </ListGroup>
                                        <Card.Body>
                                            <Card.Link
                                                className='link-hover text-success text-decoration-none fw-bold'
                                                onClick={() => {
                                                    navigate(
                                                        `/movie/${movie.id}`
                                                    );
                                                }}
                                            >
                                                Details
                                            </Card.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        }
                    })
                )}
            </Row>
        </Container>
    );
};
