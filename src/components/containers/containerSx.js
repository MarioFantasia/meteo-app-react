import React from 'react';
import styled from 'styled-components';
import CurrentCity from '../sezioni/currentCity';
import CurrentWeather from '../sezioni/currentWeather';
import Today from '../sezioni/today';
import WeekMonthWeather from '../sezioni/weekMonthWeather';


const ContainerSx = () => {
    return (
        <Container>
            <div className="box_top">
                <CurrentCity />
                <CurrentWeather />
            </div>
            <div className="box_bottom">
                <Today />
                <WeekMonthWeather />
            </div>
        </Container>
    )
};

const Container = styled.div`
        width: 65%;
        display: flex;
        flex-direction: column;
        
        .box_top {
            position: relative;
            width: 100%;
        }

        .box_bottom {
            height: 500x;
            justify-content: space-between;
            display: flex;
            padding-top: 20px ;
        }
`;



export default ContainerSx;