import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

import "./Header.css";
import { useSelector } from "react-redux";

export const Header = () => {
    const favorites = useSelector((state) => state.favorites.favorites);
    return (
        <>
            <Navbar bg='dark' data-bs-theme='dark' className='p-0 sticky-top'>
                <Container>
                    <Nav className='me-auto fw-bold'>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            Movies
                        </NavLink>
                        <NavLink
                            to='/favorites'
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            Favorites{" "}
                            <AiFillHeart className='mb-2 text-danger' />
                            {favorites.length}
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};
