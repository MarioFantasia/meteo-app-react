import React from 'react';
import { useSelector } from 'react-redux';
import { citiesSelector }  from '../../redux/sliceWeather';
import { setObject } from '../../redux/dataWeather'

import styled from 'styled-components';



const CurrentWeather = () => {
    //richiamo i dati con useSelector. Valori API
    const   {cities}   = useSelector(citiesSelector)

    //inizializzo array in cui inserire i dati settati
    const setCities = [];

    //settaggio array. Valori modificati
    setObject(setCities, cities)
    
    //manipolazione dei dati
    const current = () => {
        return setCities.map((elm, index) => {
            if (index === 1) {
                return (
                    <Style key={index}>
                        <h2>{elm.currently.temp}°</h2>
                        <div className="image">
                            <img src={elm.currently.icon} alt={elm.weather} />
                        </div>
                    </Style>
                )
            }
        })
    }

    /* Cosa esporta il componente */
    return (
        <>
            {current()}
        </>

    );
};


/* STYLE */
const Style = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    width: 150px;
    height: 250px;
    border-radius: 20px;
    background: linear-gradient(#577ce8, #6ea7f1);
    text-align:center;
    position: absolute;
    top: calc(230px - 125px);
    left: -50px;
    color: white;
    h2 {
        width: 120px;
        font-size: 50px ;
        margin-left: auto;
    }

    .image {
        display: flex;
        justify-content: flex-end;
    }

    img {
        width: 80%;
    }
`;
export default CurrentWeather;