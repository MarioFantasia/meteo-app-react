import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { citiesSelector }  from '../../redux/sliceWeather';
import {screenFalse}  from '../../redux/sliceScreen'
import { setObject } from '../../redux/dataWeather';
import styled from 'styled-components';

//componente
import CurrentWeather from './currentWeather';

const CurrentCity = () => {
    
    //richiamo i dati con useSelector. Valori API
    const {cities} = useSelector(citiesSelector);

    //inizializzo array in cui inserire i dati settati
    const setCities = [];

    //settaggio array. Valori modificati
    setObject(setCities, cities)

    const dispatch = useDispatch();
    const changeFalseScreen = () => {
        dispatch(screenFalse())
    }

    //manipolazione dei dati
    const renderCities = () => {

        return setCities.map((city, index) => {
                if (city.live) {
                    return (
                        <div className="city" key={index}>
                            <div className="smartIcons">
                                <span><i className="fa-solid fa-arrow-left" onClick={()=>changeFalseScreen()}></i></span>
                                <span><i className="fa-solid fa-plus"></i></span>
                            </div>
                            
                            <div className="box_city">
                                <h2>{city.name}</h2>
                                <h3>{city.unixTime.day} {city.unixTime.date}, {city.unixTime.month}</h3>
                                <h4>{city.currently.weather}</h4>
                            </div>
                        </div>
                    );
                }
            }
        )
    }

    /* Cosa esporta il componente */
    return (
        <Component>
            {renderCities()}
            <CurrentWeather className="currentWeather" />
        </Component>
    );
};

const Component = styled.div`
    height: 430px;
    background: linear-gradient(to right, #BCD6ED,  #89BEDD);
    border-radius: 20px;
    box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.18);
    display: flex;
    position: relative;

    .smartIcons {
        display: none;
    }

    .city {
        color: #01175F;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 78px;
        left: 137px;
    }

    .city h2 {
        font-size: 28px;
        font-weight: 700;
    }

    h3 {
        font-size: 19px;
        font-weight: 600;
        margin: 10px 0;
    }

    h4 {
        font-size: 18px;
        font-weight: 400;
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        background: linear-gradient(#5679E8, #6FA5EA);
        border-radius: 20px;
        box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.18);
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        .city {
            width: 400px;
            color: white;
            display: flex;
            text-align: center;
            position: initial;
            margin: 0 auto;
        }

        .city h2 {
            font-size: 50px;
            font-weight: 700;
        }

        h3 {
            font-size: 25px;
            font-weight: 600;
            margin: 10px 0;
        }

        h4 {
            font-size: 22px;
            font-weight: 400;
        }
    }

    @media screen and (max-width:767px){
        width: 100%;
        height: 280px;
        margin: 0 auto;
        background: transparent;
        border-radius: 20px;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.0);
        display: flex;
        flex-direction: column;

        
        .smartIcons {
            width: 100%;
            height:1px;
            display: flex;
            justify-content: space-between;
            padding: 0 15px;
            transform: translateY(15px);
        }

        .smartIcons span:first-child {
            font-size: 25px;
        }
    
        .smartIcons span:last-child {
            display: inline-block;
            border: 2px solid;
            line-height:10px;
            width: 30px;
            height: 30px;
            padding-top: 4px;
            border-radius: 10px;
            transform: translateY(3px);
        }

        .city {
            width: 100%;
            color: white;
            display: flex;
            flex-direction: column;
            text-align: center;
            margin: 0 auto;
            position: initial;
        }

        .box_city {
            margin: 0 auto;
        }

        .city h2 {
            font-size: 50px;
            font-weight: 700;
        }

        h3 {
            font-size: 25px;
            font-weight: 600;
            margin: 10px 0;
        }

        h4 {
            font-size: 22px;
            font-weight: 400;
        }
    }
`;

export default CurrentCity;
