import React from 'react';
import { useSelector } from 'react-redux';
import { citiesSelector }  from '../../redux/sliceWeather';
import { setObject } from '../../redux/dataWeather';
import styled from 'styled-components';

import CurrentWeather from './currentWeather';


import {Container, Row, Col} from 'react-bootstrap';



const CurrentCity = () => {
    //richiamo i dati con useSelector. Valori API
    const {cities} = useSelector(citiesSelector);

    //inizializzo array in cui inserire i dati settati
    const setCities = [];

    //settaggio array. Valori modificati
    setObject(setCities, cities)

    //manipolazione dei dati
    const renderCities = () => {

        return setCities.map((city, index) => {
                if (city.id === 1) {
                    return (
                        <div className="city" key={index}>
                            <div className="smartIcons">
                                <span><i class="fa-solid fa-arrow-left"></i></span>
                                <span><i className="fa-solid fa-plus"></i></span>
                            </div>
                            <h2>{city.name}</h2>
                            <h3>{city.unixTime.day} {city.unixTime.date}, {city.unixTime.month}</h3>
                            <h4>{city.currently.weather}</h4>
                        </div>
                    );
                }
            }
        )
    }

    /* Cosa esporta il componente */
    return (
        <Component>
            <Container fluid>
                <Row>
                    <Col >
                        {renderCities()}
                    </Col>
                    <Col lg={1} xl={1} >
                        <CurrentWeather className="currentWeather"/>
                    </Col>
                </Row>
            </Container>
        </Component>
    );
};

const Component = styled.div`
    height: 430px;
    background: linear-gradient(to right, #BCD6ED,  #89BEDD);
    border-radius: 20px;
    box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.18);
    display: flex;

    .smartIcons {
        display: none;
    }

    .city {
        width: 200px;
        color: #01175F;
        display: flex;
        flex-direction: column;
        transform:translate(125px, 72px);
    }

    .city h2 {
        font-size: 28px;
        font-weight: 700;
    }

    h3 {
        font-size: 19px;
        font-weight: 600;
        margin: 10px 0;
    }

    h4 {
        font-size: 18px;
        font-weight: 400;
    }


    @media screen and (min-width: 768px) and (max-width: 992px) {
        height: 380px;
        background: linear-gradient(#5679E8, #6FA5EA);
        border-radius: 20px;
        box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.18);
        display: flex;
        flex-wrap: wrap;
        

        .city {
            width: 400px;
            color: white;
            display: flex;
            text-align: center;
            margin: 0 auto;
            transform: translateY(40px);
        }

        .city h2 {
            font-size: 50px;
            font-weight: 700;
        }

        h3 {
            font-size: 25px;
            font-weight: 600;
            margin: 10px 0;
        }

        h4 {
            font-size: 22px;
            font-weight: 400;
        }
    }

    @media screen and (max-width:767px){
        height: 380px;
        margin: 0 auto;
        width: 100%;
        background: transparent;
        border-radius: 20px;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.0);
        display: flex;
        flex-wrap: wrap;
        
        .smartIcons {
            display: flex;
            width: 100%;
            justify-content: space-between;
            padding: 0 15px;
        }

        .smartIcons span:first-child {
            font-size: 25px;
        }
    
        .smartIcons span:last-child {
            display: inline-block;
            border: 2px solid;
            line-height:10px;
            width: 30px;
            height: 30px;
            padding-top: 4px;
            border-radius: 10px;
        }

        .city {
            width: 100%;
            color: white;
            display: flex;
            text-align: center;
            margin: 0 auto;
            transform: translateY(40px);
        }

        .city h2 {
            font-size: 50px;
            font-weight: 700;
        }

        h3 {
            font-size: 25px;
            font-weight: 600;
            margin: 10px 0;
        }

        h4 {
            font-size: 22px;
            font-weight: 400;
        }
    }
`;

export default CurrentCity;
