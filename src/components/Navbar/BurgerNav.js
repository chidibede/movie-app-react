import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Rightnav from './RightNav'

const BurgerIcon = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 8px;
    right: 20px;
    display: none;
    z-index: 20;

    @media (max-width: 720px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div{
        background: ${({ open }) => open ? '#525557' : 'whitesmoke'};
        border-radius: 5px;
        width: 2rem;
        height: 0.25rem;
        transform-origin: 1px;
        transition: all 0.3s ease;

        &:nth-child(1){
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2){
            transform: ${({ open }) => open ? 'translateX(100)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }

        &:nth-child(3){
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`

const BurgerNav = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <BurgerIcon open={open} onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </BurgerIcon>
            <Rightnav open={open} />
        </>
    )
}

export default BurgerNav