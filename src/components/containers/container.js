import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { screenSelector }  from '../../redux/sliceScreen';

/* Componenti */
import ContainerTop from './containerTop';
import ContainerBtm from './containerBtm';
import Footer from '../sezioni/footer';

import styled from 'styled-components';
import {Container} from 'react-bootstrap';




const MainContainer = () => {
    const {screen} = useSelector(screenSelector);
    const [size, setSize] = useState(window.innerWidth);

    const dimensionSize = () => {
        setSize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', dimensionSize)
        return () => {
            window.removeEventListener('resize', dimensionSize);
        }
    });

    return (
        <Component style = {(size > 768) ? {visibility: 'visible'} : ((!screen) ? {background: '#F1F1F1'} : {})}>
            <Container className="main" fluid="lg">
                <ContainerTop />
                <ContainerBtm/>
                <Footer />
            </Container>
        </Component>
    )
};

//STYLE
const Component = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
    background-color: #F1F1F1;
    padding: 53px 0;

    .main {
        padding: 0;
        margin: 0 auto;
    }

//MEDIA QUERY
    @media screen and (min-width: 768px) and (max-width: 991px){
        padding: 10px;
        overflow-x: hidden;

    }

    @media screen and (max-width: 767px) {
        background: linear-gradient(#567AE8, #71AEF0);
        padding: 1px;
        flex-direction: column;
        justify-content: space-between;
        overflow-x: hidden;


        .main {
            display: flex;
            flex-direction: column;
            width: 100vw;
            margin: 0 auto;
            height: 100vh;
            padding: 18px
        }
    }   

`;
export default MainContainer;