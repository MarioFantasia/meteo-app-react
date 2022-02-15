import React from 'react';
import { useSelector } from 'react-redux';
import { citiesSelector }  from '../../redux/sliceWeather';
import { setObject } from '../../redux/dataWeather'

import styled from 'styled-components';



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
                        <div className="box" key={index}>
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
        <Section>
            {renderCities()}
        </Section>
    );
};

const Section = styled.div`
    height: 460px;
    background: linear-gradient(to right, #BCD6ED,  #89BEDD);
    border-radius: 20px;
    box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.45);

    

    .box {
        height:150px;
        color: #01175F;
        position:absolute;
        top: 90px;
        left: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    h2 {
        font-size: 30px;
    }

    h4 {
        font-size: 20px;
        font-weight: 300;
    }

`;

export default CurrentCity;
