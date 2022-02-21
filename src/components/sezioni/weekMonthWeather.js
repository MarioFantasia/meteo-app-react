import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { citiesSelector }  from '../../redux/sliceWeather';
import { setObject } from '../../redux/dataWeather'

import styled from 'styled-components';




/* COMPONENTE */
const WeekWeather = () => {
    // stato della condizione per la visualizzazione dei componenti
    const [show, setShow] = useState(true);

    //richiamo i dati con useSelector. Valori API
    const {cities} = useSelector(citiesSelector);

    //inizializzo array in cui inserire i dati settati
    const setCities = [];

    //settaggio array. Valori modificati
    setObject(setCities, cities)

    //manipolazione dei dati. Settimanali

    const weekInfos = () => {
        return setCities.map((elm) => {
            if(elm.live) {
                return elm.weekly.map((day, index) => {
                    return (
                        <div key={index} className="weekWeather">
                            <h3>{day.time}</h3>
                            <h2>{day.temp}°</h2>
                            <img src={day.icon} alt={elm.weather} />
                        </div>
                        )
                })
            }
        })
    }


    //manipolazione dei dati. Mensili
    const monthInfos = () => {
        return setCities.map((elm) => {
            if(elm.live) {
                return elm.monthly.map((day, index) => {
                    return (
                        <div key={index} className="monthWeather">
                            <div className="box_sx">
                                <h3>{day.time.day}, {day.time.date} {day.time.month}</h3>
                                <div className="image">
                                    <img src={day.weather.icon} alt={elm.weather} />
                                </div>
                            </div>
                            <div className="box_dx">
                                <h2>{day.weather.temp}</h2>
                                <p>{day.weather.description.replace(/^./, day.weather.description[0].toUpperCase())}</p>
                                <p>The high will be {day.weather.tempMax}, the low will be {day.weather.tempMin}</p>
                                <ul>
                                    <li>Humidity: {day.other.humidity}</li>
                                    <li>UV: {day.other.uv}</li>
                                    <li>Dew point: {day.other.dew_point}</li>
                                </ul>
                            </div>
                        </div>
                    )
                })
            }
        })
    }

    const horizontalScroll = (e) => {
        if (e.target.id === 'left') {
            return document.getElementById('slider').scrollLeft = 0;

        } else if (e.target.id === 'center') {
            if(show) {
                return document.getElementById('slider').scrollLeft = 645
            } else {
                return document.getElementById('slider').scrollLeft -= 645 
            }
        } else {
            if(show) {
                return document.getElementById('slider').scrollLeft = 1250
            } else {
                return document.getElementById('slider').scrollLeft += 645 
            }
        }
    }


    /* Cosa esporta il componente */
    return (
        <Component >
            <div className="boxSelectPeriod">
                <div  className={!show ?  'gradient' : '' } onClick={() => setShow(false)} >
                    <h2 className="this_week">
                        This week
                    </h2>
                </div>

                <div className={!show ? '' : 'gradient' } onClick={() => setShow(true)}>
                    <h2 className="this_month" >
                        This month
                    </h2>
                </div>
            </div>
                
            <div className="boxContainer">
                <div className="slider" id="slider">
                    { !show?  (weekInfos()) : (monthInfos()) }
                </div>
                <div className="point">
                    <span><i id="left" className="fa-solid fa-circle" onClick={horizontalScroll} ></i> </span>
                    <span><i id="center" className="fa-solid fa-circle" onClick={horizontalScroll} ></i> </span>
                    <span><i id="right" className="fa-solid fa-circle" onClick={horizontalScroll} ></i> </span>
                </div>
            </div>
            
        </Component>
    )

};

const Component = styled.div`

    .boxSelectPeriod {
        display: flex;
        width: calc((100%/ 12) * 8);
        height: 77px;
        background-color: white;
        border-radius: 20px 20px 0 0;
        box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.18);
        margin-top: -16px;
    }


    .boxSelectPeriod div {
        width: calc((100%/ 12) * 6);
        border: none;
        text-align: center;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }

    .this_week, .this_month {
        font-size: 25px;
        font-weight: 600;
        height: 100%;
        border-radius: 20px 20px 0 0;
        padding-top: 20px;
    }

    .gradient {
        background-color: #577DE0;
        color: white;
    }
    .boxContainer {
        background: linear-gradient(#5679E8, #72aff3);
        box-shadow: 6px 10px 16px 1px rgba(0,0,0,0.18);
        border-radius: 25px;
        border-top-left-radius: 0;
        overflow-y: hidden;
    }

    //SLIDER
    .slider {
        width: 3000px;
        color: white;
        display: flex;
        flex-wrap: nowrap;
        padding: 30px 13px 10px 13px;
    }

    h3 {
        font-size: 14px;
    }

    /* componente info settimanale */
    .weekWeather {
        height: 300px;
        width: 146px;
        color: white;
        background: linear-gradient(#6b90eb, #79aaf1);
        box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.18);
        text-align:center;
        margin: 0 14px;
        border-radius: 20px;
        padding-top: 20px;
    }


    .weekWeather h3 {
        font-size: 19px;
    }

    .weekWeather h2 {
        margin: 40px 0;
        font-size: 35px;
        font-weight: 600
    }

    .weekWeather img {
        transform: translateY(-35px)
    }

    /* Componente info mese */
    .monthWeather {
        height: 300px;
        width: 450px;
        background: linear-gradient(#6b90eb, #79aaf1);
        box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.18);
        border-radius: 20px;
        display: flex;
        margin: 0 14px;
        padding: 20px;
    }

    .box_sx {
        width: calc(( 100% / 12 ) * 5);
        display: flex;
        flex-direction: column;
    }

    .box_sx h3 {
        font-size: 18px;
    }

    .image {
        margin: auto 0;
    }

    img {
        width: 100%;
        transform: translateX(-18px);
    }

    .box_dx {
        width: calc(( 100% / 12 ) * 7);
        padding:0;
        display: flex;
        flex-direction: column;
    }

    h2, p {
        margin-bottom: 10px;
    }

    h2 {
        font-size: 23px;
    }

    // punti slider
    .point {
        color: rgba(255, 255, 255, 0.5);
        display: inline;
        text-align: center;
        margin-left: 250px;
        height: 20px;
    }

    .point i {
        margin: 10px 5px;
        font-size: 8px;
    }

    .point i:active {
        color: white;
    }

    @media screen and (min-width: 992px) and (max-width: 1199px) {

        .boxSelectPeriod {
            width: 80%;
        }

        .weekWeather {
            height: 300px;
            width: 146;
            color: white;
            background: linear-gradient(#6b90eb, #79aaf1);
            box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.18);
            text-align:center;
            margin: 0 4px;
            border-radius: 20px;
            padding-top: 20px;
        }

        .point {
            margin-left: 180px ;
        }

    }

    @media screen and (max-width: 767px) {
        background-color: transparent;
        display: flex;
        * {
            box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.0);
        }

        .boxSelectPeriod {
            display: none;
        }

        .container {
            width: 100%;
        }

        .slider {
            width: 1000px;
        }

        .boxContainer {
            background: transparent;
            box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.0);
        }

        .weekWeather {
            height: 220px;
            width: 146px;
            color: white;
            box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.18);
            text-align:center;
            margin: 0 4px;
            border-radius: 20px;
            padding-top: 20px;
            background: linear-gradient(#567AE8, #71AEF0);
        }

        .monthWeather {
            //display: none;
        }

        .point {
            display: none;
        }

    }
    
`;



/* /styled-components */


export default WeekWeather;
