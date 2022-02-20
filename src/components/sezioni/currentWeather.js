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
                    <Section key={index}>
                        <h2>{elm.currently.temp}°</h2>
                        <div className="image">
                            <img src={elm.currently.icon} alt={elm.weather} />
                        </div>
                    </Section>
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


/* Section */
const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    width: 150px;
    height: 250px;
    border-radius: 0 20px 20px 0;
    background: linear-gradient(#5679E8, #6FA5EA);
    text-align:center;
    position: absolute;
    top: calc(230px - 125px);
    left: -60px;
    color: white;
    padding-left: 20px;
    box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.45);
    
    h2 {
        width: 120px;
        font-size: 50px ;
        margin-left: auto;
    }

    .image {
        display: flex;
        justify-content: center;
    }

    img {
        width: 80%;
    }
`;
export default CurrentWeather;