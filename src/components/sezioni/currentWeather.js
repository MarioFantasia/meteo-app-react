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
                    <div className="box" key={index}>
                        <h2>{elm.currently.temp}°</h2>
                        <img src={elm.currently.icon} alt={elm.weather} />
                    </div>
                )
            }
        })
    }

    /* Cosa esporta il componente */
    return (
        <Component>
            {current()}
        </Component>

    );
};


    const Component = styled.div`
    display: flex;
    
    .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 275px;
        border-radius: 0 20px 20px 0;
        background: linear-gradient(#5679E8, #6FA5EA);
        text-align:center;
        color: white;
        box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.18);
        transform:translate(-850px, 70px);
    }

    h2 {
        font-size: 50px;
        font-weight: bold;
        transform:translate(5px, 10px);
    }

    img {
        width: 130px;
        transform:translate(-5px, 7px);
    }


    /* MEDIA QUERY */
    @media screen and (min-width: 1200px) and (max-width: 1399px){
        .box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 275px;
            border-radius: 0 20px 20px 0;
            background: linear-gradient(#5679E8, #6FA5EA);
            text-align:center;
            color: white;
            box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.18);
            transform:translate(-740px, 70px);
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199px){
        .box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 275px;
            border-radius: 0 20px 20px 0;
            background: linear-gradient(#5679E8, #6FA5EA);
            text-align:center;
            color: white;
            box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.18);
            transform:translate(-630px, 70px);
            
        }
    }

    @media screen and (max-width: 767px) {
        .box {
            display: flex;
            border-radius: 0 20px 20px 0;
            text-align:center;
            color: white;
            background: transparent;
            box-shadow: none;
            transform:translate(250px, 70px);
            transform: rotate(90deg);
            margin: 0 auto;
        }

            h2, img {
                transform: rotate(-90deg);
            }

            h2 {
                font-size: 80px;
            }

            img {
                width: 200px;
            }
    }
`;
export default CurrentWeather;