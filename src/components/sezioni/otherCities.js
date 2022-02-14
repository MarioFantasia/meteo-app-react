import React from 'react';
import { useSelector } from 'react-redux';
import { citiesSelector }  from '../../redux/sliceWeather';
import { setObject } from '../../redux/dataWeather'

import styled from 'styled-components';

const OtherCities = () => {
    //richiamo i dati con useSelector. Valori API
    const   { cities }  = useSelector(citiesSelector)

    //inizializzo array in cui inserire i dati settati
    const setCities = [];
    setObject(setCities, cities)

    //manipolazione dei dati
    const renderCities = () => {
        return setCities.map((city, index) => {
            if(!(city.live)) {
                return (
                    <City key={index}>
                        <div key={city.id} className="info">
                            <h3>{city.name}</h3>
                            <p>{city.unixTime.day} {city.unixTime.date}, {city.unixTime.month}</p>
                            <small>{city.unixTime.hour}:{city.unixTime.min}.</small>
                        </div>
                        <div className="image">
                            <img src={city.currently.icon} alt={city.weather} />
                        </div>
                        <h2>{city.currently.temp}°</h2>
                    </City>
                )
            }
        }
        )
    }

    /* Cosa esporta il componente */
    return (
        <Section>
            <div className="add_city">
                <div className="icon">
                    <i className="fa-solid fa-plus"></i>
                </div>
                <h3>Aggiungi città</h3>
            </div>
            {renderCities()}
        </Section>
    );
};



/* STILE COMPONENTI */

/* SECTION */
const Section = styled.div`
    display: flex;
    height: 460px;
    flex-direction: column;
    align-items: center;
    background-color: red ;
    justify-content: space-between;

    .add_city {
        width: 80%;
        line-height:110px;
        background-color: green;
        text-align: center;
        display: flex;
        justify-content: center;
    }

    .icon {
        width: 25px;
        height: 25px;
        border: 3px solid;
        margin: auto 10px;
        display: flex;
        border-radius: 5px
    }

    i {
        display: inline-block;
        margin: auto;
    }
`;

/* CITY */
const City = styled.div`
    width: 80%;
    height: 150px;
    background-color: green;
    border-radius: 20px;
    color: white;
    display: flex;
    justify-content: space-between;

    h3 {
        font-size: 25px;
    }

    .info, .image, h2 {
        display: flex;
        width: calc(100%/3);
    }

    .info, h2 {
        padding: 20px;
    }

    .info {
        flex-direction: column;
    }

    small {
        margin-top: 5px;
        font-weight: 200;
    }

    img {
        width: 100%;
    }

    h2 {
        text-align: center;
        line-height: 130px; //150px 'altezza h2' - 20px 'padding di h2'
        font-size: 60px;
    }

    
`; 

export default OtherCities;
