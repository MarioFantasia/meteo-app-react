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
    console.log(setCities);
    const weekInfos = () => {
        return setCities.map((elm) => {
            if(elm.live) {
                return elm.weekly.map((day, index) => {
                    return (
                        <UnderStyles key={index}>
                            <h3>{day.time}</h3>
                            <h2>{day.temp}°</h2>
                            <div className="image">
                                <img src={day.icon} alt={elm.weather} />
                            </div>
                        </UnderStyles>
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
                        <MonthWeather key={index} >
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
                        </MonthWeather>

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
        <Section>
            <BoxSelectPeriod>
                <div className="this_week">
                    <h3 className={show ? 'gradient' : ''} onClick={() => setShow(true)}>
                        This week
                    </h3>
                </div>

                <div className="this_month">
                    <h3 className={show ? '' : 'gradient'} onClick={() => setShow(false)}>
                        This month
                    </h3>
                </div>
            </BoxSelectPeriod>

            <Box>
                <Slider id="slider">
                    { show? (weekInfos()) : (monthInfos()) }
                </Slider>
                <div className="point">
                    <span><i id="left" className="fa-solid fa-circle" onClick={horizontalScroll} ></i> </span>
                    <span><i id="center" className="fa-solid fa-circle" onClick={horizontalScroll} ></i> </span>
                    <span><i id="right" className="fa-solid fa-circle" onClick={horizontalScroll} ></i> </span>
                </div>
            </Box>
        </Section>
    )

};

const Section =styled.div`
    position:relative;
    display: flex;
    flex-direction:column;
    justify-content: flex-end;
`;

const BoxSelectPeriod = styled.div`
    width: 70%;
    height: 110px;
    border-radius: 20px;
    display: flex;
    position: absolute;
    top: 40px;
    background-color: white;
    box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.45);



    .this_week, .this_month {
        width: 100%;
        border-radius: 20px;
        border: none;
        text-align: center;
        line-height: 50px;
        background-color: white;

    }

    h3 {
        height:100px;
        font-size: 30px;
        border-radius: 20px 20px 0 0;
        padding-top: 20px;
    }

    .gradient {
        background-color: #5679E8;
        color: white;
    }

`;


/* styled-components */
const Box = styled.div`
    width: 100%;
    height: 380px;
    margin-bottom: 20px;
    border-radius: 20px;
    background: linear-gradient(#5679E8, #72aff3);
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    justify-items: center;
    transform: translateY(20px);
    box-shadow: 10px 11px 14px -1px rgba(0,0,0,0.42);


    .point {
        margin: 0 auto 10px auto;
        color: rgba(255, 255, 255, 0.5);
        display: inline;
    }

    i:active {
        background-color: white;
        border-radius: 50%;
    }
`;


const Slider = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    width: 650px;
    height: 600px;
    border-radius: 20px;
    overflow-x: scroll;
    padding: 25px 5px 0 0;
    &::-webkit-scrollbar {
    display: none;
    }
`;

const UnderStyles = styled.div `
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-width: 155px; 
    height: 300px;
    border-radius: 20px;
    background: linear-gradient(#5679E8, #72aff3);
    box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.45);

    text-align:center;
    padding: 20px;
    margin: 0 30px;

    h3 {
        font-size: 20px;
        margin: 0 auto;
    }

    h2 {
        font-size: 40px;
    }

    .image {
        width: 120px;
        height: 120px;
        margin: 0 auto;
    }
    
    img {
        width: 100%;
    }
`;

const MonthWeather = styled.div`
    min-width: 90%;
    margin: 0 33px;
    height: 300px;
    background: linear-gradient(#5679E8, #72aff3);
    box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.45);
    border-radius: 20px;
    display: flex;
    padding: 30px;

    ul {
        list-style: none;
    }


    .box_sx {
        width: 40%;
        display: flex;
        flex-direction: column;
    }

    h3 {
        font-size: 20px;
    }

    .image {
        width: 200px;
        height: 200px;
    }

    img {
        width: 100%;
    }

    .box_dx {
        width: 60%;
        display: flex;
        flex-direction: column;
    }

    h2, p {
        margin-bottom: 15px;
    }

    h2 {
        font-size: 30px;

    }
`;

/* /styled-components */


export default WeekWeather;
