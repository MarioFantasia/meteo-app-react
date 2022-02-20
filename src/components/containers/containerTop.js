import React from 'react';
import CurrentCity from '../sezioni/currentCity';
import OtherCities from '../sezioni/otherCities';
import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';



const ContainerTop = () => {
    return (
        <Component>
            <Row className="containerTop">
                <Col lg={8} xl={8} className="left" >
                    <CurrentCity className="currentCity" />
                </Col>
                <Col>
                    <h2>Good morning!<br />Mario</h2>
                </Col>
                <Col md={12} lg={4} className="right">
                    <OtherCities/>
                </Col>
            </Row>
        </Component>
    )
};

const Component = styled.div`
    margin-bottom: 50px;

    *{  
        margin: 0;
        padding:0;
    }

    .containerTop {
        justify-content: center;        
    }

    .right {
        padding: 0 10px 0 50px;
    }

    .col:nth-child(2) h2 {
        display: none;
    }

     /* MEDIA QUERY */
    
    @media screen and (min-width: 992px) and (max-width: 1199px) {
        .right {
            padding: 0 10px 0 15px;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 992px) {
        .right {
            padding: 0;
        }
    }

    @media screen and (max-width:767px){
        display: flex;
        flex-direction: column;
        height: 630px;

        .left {
            display: none;
            //display: flex;

            height:0;
        }

        .right {
            padding: 0 20px;
            //display: none;
            display: flex;

        }

        .col:nth-child(2) {
            display: flex;
            //display: none;
        }

        .col:nth-child(2) h2{
            display: inline-block;
            text-align: center;
            margin: 0 auto;
        }
    }
`;


export default ContainerTop;