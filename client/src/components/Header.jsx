import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import logo from '../Asset/logo.png'
const Container = styled.div`
    padding: 0rem 4rem;
    .logo img{
        margin-top: -20px;
        margin-left: -30px;
        height: 8rem;
    }
    button{
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: 500;
        font-size: 1.03rem;
    }
`;
export default function Header(props) {

    const navigate = useNavigate();
    return (
        <Container className='flex a-center j-between'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <button onClick={() => { navigate(props.login ? "/login" : "/signup") }}>
                {props.login ? "log in" : "signup"}
            </button>
        </Container>
    )
}