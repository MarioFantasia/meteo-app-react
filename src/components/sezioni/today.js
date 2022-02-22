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
                return elm.hourly.map((hourly, index) => {
                    if(index > 0) {
                        return <li key={index}>{hourly.temp}°</li>
                    } else {
                        return (
                            <li key={index}><br/>{hourly.temp}°</li>
                        )
                    }
                })
            }
        })
    }

    //manipolazione dei dati. 
    const todayHour = () => {
        return setCities.map((elm) => {
            if(elm.live) {
                return elm.hourly.map((hourly, index) => {
                    if (index > 0 ) {
                        return <li key={index}>{hourly.time} {hourly.morning ? 'a.m.' : 'p.m.'}</li>
                    } else {
                        return <li key={index}><br /><br/></li>
                    }
                })
            }
        })
    }

    /* Cosa esporta il componente */
    return (
        <Component>
                <h2>Today</h2>
                <div className="timeline">
                    <ul className="temperature">
                        {todayTemp()}
                    </ul>

                    <ul className="time">
                        {todayHour()}
                    </ul>
                </div>
        </Component>
    );
};

const Component = styled.div`

    &::-webkit-scrollbar {
    display: none;
    }
    

    h2 {
        margin-bottom: 28px;
        font-size: 25px;
        font-weight: 700;
    }

    .timeline {
        color: white;
        height: 375px;
        width: calc(100% - 45px);
        border-radius: 25px;
        background: linear-gradient(#5679E8, #6FA5EA);
        box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.18);
        overflow-y: scroll;
        padding: 15px 0 0 0;
        display: flex;
        margin: auto auto 0 0;
    }

    .time {
        padding: 0;
        position: relative;
    }

    .time, .temperature {
        width: 100%;
    }


    li {
        padding: 0;
        text-align: center;
    }

    li:first-child {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 30px;
    }

    .temperature li:not(:first-child) {
        font-size: 25px;
        color: rgba(255,255,255,0.8);
        margin-bottom: 29px;
    }

    .time li:not(:first-child) {
        font-size: 20px;
        color: rgba(255,255,255,0.8);
        margin-bottom: 37px;
    }

    /* NOW */
    .time li:first-child::before{
        content: 'Now';
        color: white;
        font-size: 20px;
        font-weight: bold;
        position: absolute;
        top: 25px;
        transform: translate(-98px, 2px);
    }

    /* INDICATORI */

    //indicatore live
    .time li:first-child::after {
        content: '';
        width: 25px;
        height: 25px;
        z-index: 2;
        border-radius: 50%;
        background-color: white;
        position: absolute;
        transform: translateY(-30px);
        left: -18px;
    }

    //indicatori successvi
    .time li::after {
        content: '';
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: white;
        position: absolute;
        left: -13px;
        transform: translateY(8px);
    }

    //barra live
    .time li:last-child::before {
        content: '';
        height: 50px;
        width: 8px;

        background-color: white;
        position: absolute;
        left: -9px;
        top: 35px;
        transform: translateY(50px);
    }

    //barre successve
    .time li:not(:first-child, :last-child)::before {
        content: '';
        height: 55px;
        width: 8px;
        background-color: rgba(255,255,255,0.5);
        position: absolute;
        left: -9px;
        transform: translateY(20px);
    }
    /* /indicatori bianchi */

     /* MEDIA QUERY */
    // 992 -> 1200
    /* MEDIA QUERY */
    @media screen and (min-width: 1200px) and (max-width: 1399px){
        /* NOW */
        .time li:first-child::before{
            content: 'Now';
            color: white;
            font-size: 20px;
            font-weight: bold;
            position: absolute;
            top: 25px;
            transform: translate(-88px, 2px);
        }
    }

    @media screen and (max-width:1199px) and (min-width:993px) {
        /* NOW */
        .time li:first-child::before{
            content: 'Now';
            color: white;
            font-size: 20px;
            font-weight: bold;
            position: absolute;
            top: 25px;
            transform: translate(-76px, 2px);
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        /* NOW */
        .time li:first-child::before{
            content: 'Now';
            color: white;
            font-size: 20px;
            font-weight: bold;
            position: absolute;
            top: 25px;
            transform: translate(-95px, 2px);
        }
    }

    @media screen and (max-width: 767px) {
        justify-content: center;
        h2 {
            display: none;
        }
        .container {
            max-width: 100%;
        }

        .row:first-child {
            display: none;
        }

        .timeline {
            color: white;
            width: 100%;
            height: 150px;
            border-radius: 0;
            background: transparent;
            box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.0);
            overflow-x: scroll;
            overflow-y: hidden;
            padding:  50px 30px;
            display: flex;
            flex-direction: column;
            position: relative;
        }
        
        .timeline ul:first-child { //mettere al posto di col un div!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            order: 2;
        }

        .timeline ul:last-child {
            order: 1;
        }

        .time, .temperature {
            display: flex;
            width: 1900px;
            margin-bottom: 18px;
            justify-content: space-between;
        }

        .time {
            padding-left: 40px;
        }

        .temperature li {
            width: 45px
        }

        li:first-child {
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 0;
        }

        li br {
            display: none;
        }

        .temperature li:not(:first-child) {
            font-size: 20px;
            color: rgba(255,255,255,0.8);
            margin-bottom: 25px;
        }

        .time li:not(:first-child) {
            font-size: 15px;
            color: rgba(255,255,255,0.8);
            margin-bottom: 25px;
        }

        /* NOW */
        .temperature li:first-child::before{
            content: 'Now';
            font-size: 20px;
            font-weight: bold;
            position: absolute;
            top: 25px;
            transform: translate(-17px, 20px);
        }

        /* INDICATORI */

        //indicatore live
        .temperature li:first-child::after {
            content: '';
            width: 25px;
            height: 25px;
            z-index: 2;
            border-radius: 50%;
            position: absolute;
            transform: translate(-13px, -35px);
            left: 41px;
        }
        
        //indicatori successvi
        .temperature li::after {
            content: '';
            width: 17px;
            height: 17px;
            border-radius: 50%;
            background-color: white;
            position: absolute;
            transform: translate(-22px, -30px);
        }

        //barra live
        .time li:last-child::before {
            content: '';
            height: 8px;
            width: 85px;
            background-color: white;
            position: absolute;
            transform: translate(20px, 5px);
            
        }

        //barre successve
        .temperature li:not(:first-child, :last-child)::before {
            content: '';
            height: 8px;
            width: 81px;
            background-color: rgba(255,255,255,0.5);
            position: absolute;
            transform: translate(14px, -25px);
            
        }
        
        //cambio ' .time.li. a .temperature.li ' Rendo dispaly none i precedenti '.time'
        // tengo solo .time li:last-child::before
        
        .time li:first-child::before,
        .time li:first-child::after,
        .time li::after,
        .time li:not(:first-child, :last-child)::before {
            display: none;

        }

    }
`;

export default Today;
