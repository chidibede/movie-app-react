import React from 'react'
import { Link } from 'react-router-dom'
import BurgerNav from './BurgerNav'

import styled from 'styled-components'

const Nav = styled.nav`
    background: #171e26;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    border-bottom: 0.5px solid white;

    .brand{
       padding-left: 12px;
       padding-top: 12px;
       padding-bottom: 12px;
        color: whitesmoke;

        &:hover{
            color: darkgray;
            transition: all 0.3s ease;
        }
    }

    a:link{
        text-decoration: none;
    }

`

const Navbar = () => {
    return (
        <Nav>
            <Link to="/">
                <h3 className="brand">Bede Movies</h3>
            </Link>
            <BurgerNav />


        </Nav>
    )
}

export default Navbar