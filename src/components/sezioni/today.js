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
    flex-direction: column;
    h2 {
        font-size: 30px;
        margin: 20px;
    }
`;

/* Box */
const Box = styled.div`
    color: white;
    width: 30%;
    height: 350px;
    padding: 35px 20px;
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

    /* Barra timeline */
    .temperature::after {
        content: '';
        width: 8px;
        height: 620%; /* brutto ma non sapevo come altro fare per fare arrivare la barra in fondo */
        background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0.5) 10%);
        position: absolute;
        top: 10px;
        left: 120px;
    }

    /* Indicatori  */
    .time li::before {
        content: '';
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: white;
        position: absolute;
        left: -40px;
        margin-top: 10px;
    }

    /* posizionamento 'now' */
    .time li:first-child::after{
        content: 'Now';
        color: white;
        position: absolute;
        top: -30px;
        right: 105px;
    }

    
`;

export default Today;
