import React from 'react';
import { useSelector } from 'react-redux';
import { citiesSelector }  from '../../redux/sliceWeather';
import { setObject } from '../../redux/dataWeather'

import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

const OtherCities = () => {
    //richiamo i dati con useSelector. Valori API
    const   { cities }  = useSelector(citiesSelector)

    //inizializzo array in cui inserire i dati settati
    const setCities = [];

    //settaggio array. Valori modificati
    setObject(setCities, cities)

    //funzione per il background;
    const selectBackground = (weather) => {
        switch (weather) {
            case 'Clouds' || 'Snow':
                return 'linear-gradient(to right, #4f576d, #5d677c, #6c788c, #7c899c, #8c9bac)';

            case ('Thunderstorm' || 'Rain' || 'Drizzle'):
                return 'linear-gradient(to right, #102b6c, #1e4082, #2b5598, #396baf, #4882c5)';

            default: return 'linear-gradient(#5679E8, #6FA5EA)';
        }
    }

    //manipolazione dei dati
    const renderCities = () => {
        return setCities.map((city, index) => {
            if(!(city.live)) {
                return (
                    <Col lg={12} key={index} className="city" style={{background: selectBackground(city.currently.weather)}}>
                        <div className="info">
                            <h5>{city.name}</h5>
                            <p>{city.unixTime.day} {city.unixTime.date}, {city.unixTime.month}</p>
                            <h6>{city.unixTime.hour}:{city.unixTime.min}.</h6>
                        </div>
                        <div className="image">
                            <img src={city.currently.icon} alt={city.weather} />
                        </div>
                        <h2>{city.currently.temp}°</h2>
                    </Col>
                )
            }
        })
    }

    /* Cosa esporta il componente */
    return (
        <Component>
            <Container fluid>
                <Row>
                    <Col>
                        <div className="add_city">
                            <div className="icon">
                                <i className="fa-solid fa-plus"></i>
                            </div>
                            <h3>Aggiungi città</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {renderCities()}
                </Row>
            </Container>
        </Component>
    );
};



/* STYLE */
const Component = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;



    .add_city {
        margin-bottom: 19px
    }

    .city:not(:last-child) {
        margin-bottom: 30px
    }

    .add_city {
        display: flex;
        justify-content: center;
        height: 100px;
    }

    .add_city h3 {
        font-size: 20px;
        font-weight: 700;
        color: #2d3f7a;
        margin: auto 0;
    }

    .icon {
        padding: 1px 5px;
        border: 2px solid;
        margin: auto 10px auto 0;
        border-radius: 7px;
        font-size: 12px;
    }


    //renderCities
    .city {
        padding: 20px;
        border-radius: 20px;
        height: 140px;
        color: white;
        display: flex;
        justify-content: space-between;
        box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.18);
        }

    .info, img, h2 {
        display: flex;
        width: calc((100%/12)*3);
    }

    .info {
        width: 100%;
        flex-direction: column;
        justify-content: space-evenly;
    }

    h5 {
        font-size: 25px;
    }

    p {
        padding-right: 16px;
        font-size: 14px;
        font-weight: 500;
    }

    h6 {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.8);
    }

    h2 {
        text-align: center;
        font-size: 50px;
        font-weight: 700;
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .image {
        width: 100%;
    }

    img {
        width: 130px;
        position : absolute;
        transform: translate( -22px, -15px);
    }

    @media screen and (min-width: 768px) and (max-width: 992px) {
        .row {
            justify-content: space-around;
            
        }

        .city {
            width: calc((100%/ 12) * 6 - 20px);
        }

        .city:not(:last-child) {
            margin: 0;
        }
    }
    
    @media screen and (max-width: 767px) {
        height: 200px;
        
        .city {

        }
    }
`; 

export default OtherCities;
