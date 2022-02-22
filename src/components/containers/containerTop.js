import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { screenSelector }  from '../../redux/sliceScreen';

//componenti
import CurrentCity from '../sezioni/currentCity';
import OtherCities from '../sezioni/otherCities';

import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';



const ContainerTop = () => {
    const {screen} = useSelector(screenSelector);
    const [size, setSize] = useState(window.innerWidth);

    
    const dimensionSize = () => {
        setSize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', dimensionSize)
        return () => {
            window.removeEventListener('resize', dimensionSize);
        }
    });


    return (
        <Component>
            <Row className="containerTop">
                <div className="hello" style = {(size > 767) ? {visibility: 'visible'} : ((!screen) ? {} : {display: 'none'}) } >
                    <h2>Good morning!<br />Mario</h2>
                </div>
                <Col lg={8} xl={8} className="left" style = {(size > 767) ? {visibility: 'visible'} : ((screen) ? {} : {display: 'none'}) }>
                    <CurrentCity className="currentCity"/>
                </Col>
                <Col md={12} lg={4} className="right" style = {(size > 767) ? {visibility: 'visible'} : ((!screen) ? {} : {display: 'none'}) }  >
                    <OtherCities/>
                </Col>
            </Row>
        </Component>
    )
};

//STYLE
const Component = styled.div`
    margin-bottom: 50px;

    *{  
        margin: 0;
        padding:0;
    }

    

    .right {
        padding: 0 10px 0 50px;
    }

    .hello {
        display: none;
    }


     /* MEDIA QUERY */
    @media screen and (min-width: 992px) and (max-width: 1199px) {
        .right {
            padding: 0 10px 0 15px;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        .right {
            padding: 0;
        }
    }

    @media screen and (max-width:767px){
        display: flex;
        flex-direction: column;

        .containerTop {
            height: 300px
        }

        .left {
            display: flex;
        }

        .right {
            padding: 0 20px;
            display: flex;
            flex-direction: column;
        }

        .hello{
            height: 50px;
            display: inline-block;
            text-align: center;
            margin: 0 auto;
        }

        .hello h2 {
            font-weight: 700;
            color: #2d3f7a;

        }
    }
`;


export default ContainerTop;
