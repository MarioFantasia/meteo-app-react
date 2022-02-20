import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { citiesSelector }  from '../../redux/sliceWeather';
import { setObject } from '../../redux/dataWeather'

import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';




/* COMPONENTE */
const WeekWeather = () => {
    // stato della condizione per la visualizzazione dei componenti
    const [show, setShow] = useState(true);

    //richiamo i dati con useSelector. Valori API
    const {cities} = useSelector(citiesSelector);

    //inizializzo array in cui inserire i dati settati
    const setCities = [];

    //settaggio array. Valori modificati
    setObject(setCities, cities)

    //manipolazione dei dati. Settimanali

    const weekInfos = () => {
        return setCities.map((elm) => {
            if(elm.live) {
                return elm.weekly.map((day, index) => {
                    return (
                        <Col key={index} lg={3} className="weekWeather">
                            <h3>{day.time}</h3>
                            <h2>{day.temp}°</h2>
                            <img src={day.icon} alt={elm.weather} />
                        </Col>
                        )
                })
            }
        })
    }


    //manipolazione dei dati. Mensili
    const monthInfos = () => {
        return setCities.map((elm) => {
            if(elm.live) {
                return elm.monthly.map((day, index) => {
                    return (
                        <Col key={index} lg={12} className="monthWeather">
                            <div className="box_sx">
                                <h3>{day.time.day}, {day.time.date} {day.time.month}</h3>
                                <div className="image">
                                    <img src={day.weather.icon} alt={elm.weather} />
                                </div>
                            </div>
                            <div className="box_dx">
                                <h2>{day.weather.temp}</h2>
                                <p>{day.weather.description.replace(/^./, day.weather.description[0].toUpperCase())}</p>
                                <p>The high will be {day.weather.tempMax}, the low will be {day.weather.tempMin}</p>
                                <ul>
                                    <li>Humidity: {day.other.humidity}</li>
                                    <li>UV: {day.other.uv}</li>
                                    <li>Dew point: {day.other.dew_point}</li>
                                </ul>
                            </div>
                        </Col>
                    )
                })
            }
        })
    }

    const horizontalScroll = (e) => {
        if (e.target.id === 'left') {
            return document.getElementById('slider').scrollLeft = 0;

        } else if (e.target.id === 'center') {
            if(show) {
                return document.getElementById('slider').scrollLeft = 645
            } else {
                return document.getElementById('slider').scrollLeft -= 645 
            }
        } else {
            if(show) {
                return document.getElementById('slider').scrollLeft = 1250
            } else {
                return document.getElementById('slider').scrollLeft += 645 
            }
        }
    }


    /* Cosa esporta il componente */
    return (
        <Component >
            <Container>
                <Row className="boxSelectPeriod">
                    <Col className="this_week">
                        <h2 className={!show ?  'gradient' : '' } onClick={() => setShow(false)}>
                            This week
                        </h2>
                    </Col>

                    <Col className="this_month">
                        <h2 className={show ? 'gradient' : '' } onClick={() => setShow(true)}>
                            This month
                        </h2>
                    </Col>
                </Row>
            </Container>
                
            <Container className="boxContainer">
                <Row className="slider" id="slider">
                    { !show?  (weekInfos()) : (monthInfos()) }
                </Row>
                <Row>
                    <Col className="point">
                        <span><i id="left" className="fa-solid fa-circle" onClick={horizontalScroll} ></i> </span>
                        <span><i id="center" className="fa-solid fa-circle" onClick={horizontalScroll} ></i> </span>
                        <span><i id="right" className="fa-solid fa-circle" onClick={horizontalScroll} ></i> </span>
                    </Col>
                </Row>
            </Container>
        </Component>
    )

};

const Component = styled.div`

    .boxContainer {
        background: linear-gradient(#5679E8, #72aff3);
        box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.18);

        border-radius: 25px;
        border-top-left-radius: 0;
    }

    ul {
        padding: 0;
    }

    .boxSelectPeriod {
        width: calc(75% - 3px);
        height: 77px;
        background-color: white;
        border-radius: 20px 20px 0 0;
        box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.18);
        margin-top: -16px;
    }


    .this_week, .this_month {
        border: none;
        text-align: center;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }

    .this_week h2, .this_month h2 {
        font-size: 25px;
        font-weight: 600;
        height: 100%;
        border-radius: 20px 20px 0 0;
        line-height: 61px;
        margin-bottom: 0;
    }

    .gradient {
        background-color: #577DE0;
        color: white;
    }

    //SLIDER
    .slider {
        color: white;
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
        flex-wrap: nowrap;
        padding: 30px 13px 10px 13px;
    }

    h3 {
        font-size: 14px;
    }

    .point {
        color: rgba(255, 255, 255, 0.5);
        display: inline;
        text-align: center;
        margin-bottom: 4px;
    }

    .point i {
        margin: 10px 5px;
        font-size: 8px;
    }

    .point i:active {
        color: white;
    }

    /* componente info settimanale */
    .weekWeather {
        height: 300px;
        width: calc((100%/3) - 28px);
        color: white;
        background: linear-gradient(#6b90eb, #79aaf1);
        box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.18);
        text-align:center;
        margin: 0 14px;
        border-radius: 20px;
        padding-top: 20px;
    
    }

    .weekWeather h3 {
        font-size: 19px;
    }

    .weekWeather h2 {
        margin: 40px 0;
        font-size: 35px;
        font-weight: 600
    }

    .weekWeather img {
        transform: translateY(-35px)
    }

    /* Componente info mese */
    .monthWeather {
        height: 300px;
        width: calc(100% - 28px);
        background: linear-gradient(#6b90eb, #79aaf1);
        box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.18);
        border-radius: 20px;
        display: flex;
        margin: 0 14px;
        padding: 20px;
    }

    .box_sx {
        width: calc(( 100% / 12 ) * 5);
        display: flex;
        flex-direction: column;
    }

    .box_sx h3 {
        font-size: 18px;
    }

    .image {
        margin: auto 0;
    }

    img {
        width: 100%;
        transform: translateX(-18px);
    }

    .box_dx {
        width: calc(( 100% / 12 ) * 7);
        padding:0;
        display: flex;
        flex-direction: column;
    }

    h2, p {
        margin-bottom: 10px;
    }

    h2 {
        font-size: 23px;
    }

    @media screen and (min-width: 992px) and (max-width: 1199px) {
        .weekWeather {
            height: 300px;
            width: calc((100%/3) - 5px);
            color: white;
            background: linear-gradient(#6b90eb, #79aaf1);
            box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.18);
            text-align:center;
            margin: 0 4px;
            border-radius: 20px;
            padding-top: 20px;
        }
    }

    @media screen and (max-width: 767px) {
        background-color: transparent;
        display: flex;
        * {
            box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.0);
        }

        .container:first-child {
            display: none;
        }

        .container {
            width: 100%;
        }

        .slider {
            width: 750px;
        }

        .boxContainer {
            background: transparent;
            box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.0);
        }

        .weekWeather {
            height: 300px;
            width: calc(100%/5);
            color: white;
            box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.18);
            text-align:center;
            margin: 0 4px;
            border-radius: 20px;
            padding-top: 20px;
            background: linear-gradient(#567AE8, #71AEF0);

        }

        .point {
            display: none;
        }

    }
    
`;



/* /styled-components */


export default WeekWeather;
