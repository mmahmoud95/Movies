import { useEffect, useState } from "react";
import { instance } from "../../axios/instance";
import { Link, useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { IoReturnUpBackOutline } from "react-icons/io5";

export const MovieDetails = () => {
    const { id } = useParams();
    const [details, setDatils] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        instance
            .get(`${id}`)
            .then((res) => {
                // console.log(res.data);
                setDatils(res.data);
                setGenres(res.data.genres);
                // console.log(details);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    
    return (
        <Container>
            <Link to={"/"} className='text-decoration-none fs-1 fw-bold text-black'>
                <IoReturnUpBackOutline />
            </Link>
            <Row className='mt-4'>
                <Col md={6} className='d-flex justify-content-center'>
                    <img
                        className='h-75 rounded-4 shadow text-center'
                        src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                    />
                </Col>
                <Col md={6}>
                    <h1>{details.title}</h1>
                    <p className='fw-bold'>
                        Release date :
                        <span className='fw-normal'>
                            {details.release_date}
                        </span>
                    </p>
                    <p className='fw-bold'>
                        Popularity :
                        <span className='fw-normal'>{details.popularity}</span>
                    </p>
                    <p className='fw-bold'>
                        Votes :
                        <span className='fw-normal'>{details.vote_count}</span>
                    </p>
                    <p className='fw-bold'>
                        Votes Average :
                        <span className='fw-normal'>
                            {details.vote_average}
                        </span>
                    </p>
                    <p className='fw-bold'>
                        Overview :
                        <span className='fw-normal'>{details.overview}</span>
                    </p>
                    <p className='fw-bold'>
                        genres :
                        {genres.map((genre, index) => {
                            return (
                                <span className='fw-normal' key={index}>
                                    {genre.name},
                                </span>
                            );
                        })}
                    </p>
                </Col>
            </Row>
        </Container>
    );
};
