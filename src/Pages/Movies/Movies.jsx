import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { instance } from "../../axios/instance";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";
import "./Movies.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFavorites } from "../../store/slices/moviesFavs";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    let [page, setPage] = useState(1);
    const navigate = useNavigate();
    const changePageNext = () => {
        setPage(++page);
        window.scrollTo({ top: 0 });
    };
    const changePagePrev = () => {
        if (page !== 1) {
            setPage(--page);
        }
        window.scrollTo({ top: 0 });
    };

    useEffect(() => {
        instance
            .get("popular", { params: { page } })
            .then((res) => {
                setMovies(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [page]);

    //Day 4
    const favorites = useSelector((state) => state.favorites.favorites);
    const dispatch = useDispatch();
    const changeHandler = (index) => {
        const checkInFavorites = favorites.some(
            (movie) => movie.id === movies[index].id
        );

        if (!checkInFavorites) {
            dispatch(addToFavorites(movies[index]));
        }
        console.log(checkInFavorites);
    };
    return (
        <Container>
            <Row gap={2} className='mt-5'>
                {movies.map((movie, index) => {
                    {
                        return (
                            <Col className='mb-5' key={index} md={3} sm={4} xs={6}>
                                <Card>
                                    <Card.Img
                                        className='link-hover img-fluid'
                                        onClick={() => {
                                            navigate(`/movie/${movie.id}`);
                                        }}
                                        variant='top'
                                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    />
                                    <Card.Body className='p-2'>
                                        <Card.Title className='text-nowrap overflow-hidden p-0'>
                                            {movie.title}
                                        </Card.Title>
                                        <span
                                            className='text-danger link-hover fs-3 p-0'
                                            onClick={() => {
                                                changeHandler(index);
                                            }}
                                        >
                                            {favorites.some(
                                                (favoritemovies) =>
                                                    favoritemovies.id ===
                                                    movie.id
                                            ) ? (
                                                <AiFillHeart
                                                    className='text-danger'
                                                    onClick={() => {
                                                        console.log(movie);
                                                        dispatch(
                                                            removeFavorites(
                                                                movie
                                                            )
                                                        );
                                                    }}
                                                />
                                            ) : (
                                                <AiOutlineHeart />
                                            )}
                                        </span>
                                    </Card.Body>
                                    <ListGroup className='list-group-flush'>
                                        <ListGroup.Item className='px-2 py-1 '>
                                            Rating: {movie.vote_average}
                                        </ListGroup.Item>
                                        <ListGroup.Item className='px-2 py-1 '>
                                            Releas Date : {movie.release_date}
                                        </ListGroup.Item>
                                        <ListGroup.Item className='px-2 py-1 '>
                                            Language : {movie.original_language}
                                        </ListGroup.Item>
                                    </ListGroup>
                                    <Card.Body>
                                        <Card.Link
                                            className='link-hover text-success text-decoration-none fw-bold'
                                            onClick={() => {
                                                navigate(`/movie/${movie.id}`);
                                            }}
                                        >
                                            Details
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    }
                })}
            </Row>
            <div className='d-flex justify-content-around pb-5'>
                <button
                    disabled={page == 1}
                    className='btn btn-success'
                    onClick={() => {
                        changePagePrev();
                    }}
                >
                    Prev
                </button>
                <button
                    className='btn btn-success'
                    onClick={() => {
                        changePageNext();
                    }}
                >
                    Next
                </button>
            </div>
        </Container>
    );
};

export default Movies;
