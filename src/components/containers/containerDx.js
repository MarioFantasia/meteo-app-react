import React from 'react';
import styled from 'styled-components';
import OtherCities from '../sezioni/otherCities';
import Search from '../sezioni/search';
import Localization from '../sezioni/localization';


const ContainerDx = () => {
    return (
        <Container>
            <div className="box">
                <OtherCities />
            </div>
            <div className="box">
                <Search />
                <Localization />
            </div>
        </Container>
    )
};

const Container = styled.div`
    width: 35%;
    .box {
        width: 100%;
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .box:nth-child(2) {
        justify-content: flex-end;
    }
`;

export default ContainerDx;