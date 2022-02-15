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
        width: 80%;
        padding: 35px;
        overflow: hidden;
    .container {
        display: flex;
    }
`;

export default MainContainer;