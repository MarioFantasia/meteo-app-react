import React from 'react';
import styled from 'styled-components';
import OtherCities from '../sezioni/otherCities';



const ContainerDx = () => {
    return (
        <Container>
            <div className="box">
                <OtherCities />
            </div>
        </Container>
    )
};

const Container = styled.div`
    width: 35%;
    height: 100vh;
    padding: 40px 0;
    .box {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: blue;
        }`;

export default ContainerDx;