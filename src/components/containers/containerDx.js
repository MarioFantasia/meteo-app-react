import React from 'react';
import styled from 'styled-components';
/* import OtherCities from './otherCities';
import Search from './search';
import Localization from './localization'; */


const ContainerDx = () => {
    return (
        <Container>
            <div className="box">
                {/* <OtherCities />
                <Search/>
                <Localization/> */}
            </div>
        </Container>
    )
};

const Container = styled.div`
    width: 35%;
    height: 100vh;
    padding: 20px;
    .box {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: blue;
        }`;

export default ContainerDx;