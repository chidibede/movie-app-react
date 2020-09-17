import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Ul = styled.ul`
        display: flex;
        list-style: none;
        flex-flow: row nowrap;
        border-left: 1px thin white;
        border-bottom: 1px thin white;
        background-color: #171e26;
        opacity: 0.8;

        li{
            text-decoration: none;
            color: whitesmoke;
            padding: 18px 10px;

            &:hover{
                color: darkgray;
                transition: all 0.3s ease;
                font-weight: bold;
            }
        }

        @media (max-width: 720px) {
            flex-flow: column nowrap;
            position: fixed;
            right: 0;
            top: 0;
            height: 300vh;
            width: 300px;
            transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
            transition: all 0.3s ease-in-out;

            .brand{
                padding: 20px;
            }
        }
`

const RightNavbar = ({ open }) => {
    return (
        <Ul open={open}>
            <Link to="/genres">
                <li>Genres</li>
            </Link>

            <Link to="/about">
                <li>About Us</li>
            </Link>

            <Link to="/login">
                <li>Login</li>
            </Link>
        </Ul>
    )
}

export default RightNavbar