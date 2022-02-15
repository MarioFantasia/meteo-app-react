import React from 'react';
import { useSelector } from 'react-redux';
import { citiesSelector }  from '../../redux/sliceWeather';
import { setObject } from '../../redux/dataWeather'

import styled from 'styled-components';

const Today = () => {
    //richiamo i dati con useSelector. Valori API
    const {cities} = useSelector(citiesSelector);

    //inizializzo array in cui inserire i dati settati
    const setCities = [];

    //settaggio array. Valori modificati
    setObject(setCities, cities)

    //manipolazione dei dati. 
    const todayTemp = () => {
        return setCities.map((elm) => {
            if(elm.live) {
                return elm.hourly.map((dato, index) => {
                    return <li key={index} >{dato.temp}°</li>
                })
            }
        })
    }

    //manipolazione dei dati. 
    const todayHour = () => {
        return setCities.map((elm) => {
            if(elm.live) {
                return elm.hourly.map((dato, index) => {
                    if (index > 0 ) {
                        return <li  key={index} >{dato.time} {dato.morning ? 'a.m.' : 'p.m.'}</li>
                    } else {
                        return <li key={index}></li>
                    }
                })
            }
        })
    }

    /* Cosa esporta il componente */
    return (
        <Section>
            <h2>Today</h2>
            <Box>
                <div className="timeline">
                    <ul className="temperature">
                        {todayTemp()}
                    </ul>

                    <ul className="time">
                        {todayHour()}
                    </ul>
                </div>
            </Box>
        </Section>
    );
};



/* Section */
const Section = styled.div`
    display: flex;
    width: 30%;
    flex-direction: column;
    padding-top: 5px;
    h2 {
        width: 30%;
        font-size: 30px;
        margin: 0 20px 25px 20px;
        padding-top: 45px;
    }
`;

/* Box */
const Box = styled.div`
    color: white;
    width: 100%;
    height: 380px;
    padding: 70px 20px;
    border-radius: 20px;
    background: linear-gradient(#577ce8, #6ea7f1);
    text-align:center;
    overflow-y: scroll;
    display: flex;
    justify-content: space-between;

    &::-webkit-scrollbar {
    display: none;
    }

    .timeline {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }


    .temperature, .time {
        width: 40%;
        position: relative;
    }

    li {
        height: 40px;
        font-size: 30px;
        margin-bottom: 35px;
    }
    
    .time li {
        font-size: 20px;
        line-height: 45px;
    }

    .temperature li:first-child {
        font-size: 35px;
        font-weight: bold;
    }

    /* posizionamento 'now' */
    .time li:first-child::before{
        content: 'Now';
        color: white;
        position: absolute;
        top: -30px;
        right: 105px;
    }

    /* Indicatori  */
    .time li::after {
        content: '';
        width: 20px;
        height: 20px;
        z-index: 2;
        border-radius: 50%;
        background-color: white;
        position: absolute;
        left: -37px;
        margin-top: 10px;
    }

    .time li:first-child::after {
        content: '';
        width: 30px;
        height: 30px;
        z-index: 2;
        border-radius: 50%;
        background-color: white;
        position: absolute;
        left: -42px;
        margin-top: 10px;
    }


    /* barra */
    .time li:not(:first-child, :last-child)::before {
        content: '';
        height: 80px;
        width: 8px;
        background-color: rgba(255,255,255,0.3);
        position: absolute;
        left: -32px;
        transform: translateY(10px);
    }

    .time li:last-child::before {
        content: '';
        height: 50px;
        width: 8px;
        background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0.3) 100%);
        position: absolute;
        left: -32px;
        top: -32px;
        transform: translateY(70px);
    }
`;

export default Today;
