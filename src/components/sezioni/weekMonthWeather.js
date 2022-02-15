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
                            <img src={day.icon} alt={elm.weather} />
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
                                <img src={day.weather.icon} alt={elm.weather} />
                            </div>
                            <div className="box_dx">
                                <h2>{day.weather.temp}</h2>
                                <p>{day.weather.description}</p>
                                <p>the high will be {day.weather.tempMax}, the low will be {day.weather.tempMin}</p>
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

    /* funzioni per lo scroll orizzontale */
    const horizontalScroll = (e) => {
        switch(e.target.id) {
            case 'left':
                return document.getElementById('slider').scrollLeft = 0;
            case 'center':
                return document.getElementById('slider').scrollLeft = 618;
            case 'right':
                return document.getElementById('slider').scrollLeft = 824.5;
            default:
                return 0
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
                    {/* {weekInfos()}
                    {monthInfos()} */}
                    
                </Slider>
                <div className="point">
                        <span id="left" onClick={horizontalScroll}>X</span>
                        <span id="center" onClick={horizontalScroll}>X</span>
                        <span id="right" onClick={horizontalScroll}>X</span>
                </div>
            </Box>
        </Section>
    )

};

const Section =styled.div`
    position:relative;
    display: flex;
    flex-direction:column;
`;




const BoxSelectPeriod = styled.div`
    width: 70%;
    height: 100px;
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    position: absolute;
    top: 30px;
    background-color: white;


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
    }

    .gradient {
        background-color: #587DE8;
    }

    .white {
        background-color: white;
    }

`;



/* styled-components */
const Box = styled.div`
    height: 350px;
    border-radius: 20px;
    margin: auto 0;
    background: linear-gradient(#577ce8, #6ea7f1);
    display: flex;
    flex-direction: column;
    justify-content:center;
    justify-items: center;
    transform: translateY(20px);
    .point {
        margin: 0 auto;
    }
`;


const Slider = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    width: 650px;
    border-radius: 20px;
    overflow-x: scroll;

    &::-webkit-scrollbar {
    display: none;
    }
`;

const UnderStyles = styled.div `
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-width: 155px; 
    height: 280px;
    border-radius: 20px;
    /* background: linear-gradient(#577ce8, #6ea7f1); */
    background-color: blue;
    text-align:center;
    padding: 20px;
    margin: 0 30px;
`;

const MonthWeather = styled.div`
    min-width: 90%;
    margin: 0 33px;
    height: 280px;
    background-color: blue;
    border-radius: 20px;
    display: flex;

    ul {
        list-style: none;
    }

    div {
        padding: 20px;
    }

    .box_sx {
        width: 40%;
    }

    .box_sx {
        width: 60%;
    }
`;




/* /styled-components */


export default WeekWeather;
