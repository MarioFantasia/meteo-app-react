import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { screenSelector }  from '../../redux/sliceScreen';
import Search from '../sezioni/search';
import Localization from '../sezioni/localization';
import Today from '../sezioni/today';
import WeekWeather from '../sezioni/weekMonthWeather';
import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';



const ContainerBtm = () => {
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
        <Component >
            <Row className="containerBottom" style = {(size > 767) ? {visibility: 'visible'} : ((screen) ? {} : {display: 'none'}) }>
                <Col sm={12} md={4} lg={3} className="today">
                    <Today />
                </Col>
                <Col md={8} lg={5} className="weekWeatherCol">
                    <WeekWeather />
                </Col>
                
                <Col md={12} lg={4} className="searchAndLocalization">
                    <Search />
                    <Localization />
                </Col>
            </Row>
        </Component>

    )
};

const Component = styled.div`
    *{ 
        margin: 0;
        padding:0;
    }

    .containerBottom {
        justify-content:  center;
    }

    .today {
        display: flex;
        flex-direction: column;
    }

    .searchAndLocalization {
        padding: 0 10px 0 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    /* MEDIA QUERY */
    @media screen and (min-width: 992px) and (max-width: 1199px) {

        .searchAndLocalization {
            padding: 0 10px 0 15px;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        .searchAndLocalization {
            padding: 0;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin-top: 25px;
        }
    }

    @media screen and (max-width:767px){
        //display: none;

        .searchAndLocalization {
            display: none;
        }

    }
`;



export default ContainerBtm;