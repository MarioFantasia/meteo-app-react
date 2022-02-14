import React from 'react';
import styled from 'styled-components';
import CurrentCity from '../sezioni/currentCity';
import CurrentWeather from '../sezioni/currentWeather';




const ContainerSx = () => {
    return (
        <Container>
            <div className="box_top">
                <CurrentCity />
                <CurrentWeather />
            </div>
            <div className="box_bottom">
                
            </div>
        </Container>
    )
};

const Container = styled.div`
        width: 65%;
        height: 100vh;
        padding: 20px;
        display: flex;
        flex-direction: column;
        
        .box_top {
            position: relative;
            width: 100%;
            height: 100%;
            background-color:red;
            /* margin-bottom: 15px; */
        }

        .box_bottom {
            /* margin-top: 15px; */
            height: 100%;
            background-color:green;
        }
`;



export default ContainerSx;