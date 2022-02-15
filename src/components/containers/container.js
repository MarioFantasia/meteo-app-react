import React from 'react';

import styled from 'styled-components';
import ContainerDx from './containerDx';
import ContainerSx from './containerSx';


const MainContainer = () => {

    return (
        <Container>
            <div className="container">
                <ContainerSx />
                <ContainerDx />
            </div>
        </Container>
    )
};

const Container = styled.div`
        margin: auto;
        width: 75%;
        padding: 20px;
        overflow: hidden;
        background-color: grey;
    .container {
        display: flex;
    }
`;

export default MainContainer;