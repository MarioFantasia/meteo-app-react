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
                    <City key={index} style={{background: selectBackground(city.currently.weather)}}>
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
    justify-content: space-between;


    .add_city {
        width: 80%;
        line-height:110px;
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
    width: 79%;
    height: 150px;
    background-color: green;
    border-radius: 20px;
    color: white;
    display: flex;
    justify-content: space-between;
    box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.45);


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
