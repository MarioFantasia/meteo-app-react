import React from 'react';
import styled from 'styled-components';


import ContainerTop from './containerTop';
import ContainerBtm from './containerBtm';

import {Container} from 'react-bootstrap';


const MainContainer = () => {

    return (
        <Component>
            <Container className="main" fluid="lg">
                <ContainerTop />
                <ContainerBtm />
            </Container>
        </Component>
    )
};

const Component = styled.div`
    
    display: flex;
    font-family: 'Poppins', sans-serif;
    background-color: #F1F1F1;
    padding: 53px 0;

    .main {
        padding: 0;
        margin: 0 auto;
    }


    @media screen and (min-width: 768px) and (max-width: 992px){
        padding: 10px;

    }

    @media screen and (max-width: 767px) {
        background: linear-gradient(#567AE8, #71AEF0);
        height: 100vh;
        padding: 0;
        overflow-x: hidden;
        flex-direction: column;
        justify-content: space-between;

        
    }   

`;
export default MainContainer;