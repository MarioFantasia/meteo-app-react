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
                        <div key={index}>
                            <h2>{city.name}</h2>
                            <h3>{city.unixTime.day} {city.unixTime.date}, {city.unixTime.month}</h3>
                            <h3>{city.currently.weather}</h3>
                        </div>
                    );
                }
            }
        )
    }

    /* Cosa esporta il componente */
    return (
        <Style>
            <div className="box">
                {renderCities()}
            </div>
        </Style>
    );
};

const Style = styled.div`
    height: 460px;
    background-color: #89bedc;
    display: flex;

    .box {
        height:150px;
        color: white;
        position:absolute;
        top: 75px;
        left: 150px;
    }

`;

export default CurrentCity;
