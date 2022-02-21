import React from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';


const Footer = () => {
    return (
        <Component>
            <Container >
                <Row>
                    <Col sm={12} className="icons_box">
                        <div>
                            <i className="fa-solid fa-house"></i>
                        </div>
                        
                        <div>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        
                        <div>
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Component>
    );
};

const Component = styled.div`
    background-color: white;
    height: 64px;
    width: 100%;
    border-radius: 22px;
    text-align: center;
    justify-items: center;
    display: none;
    margin-top: auto;
    

    .icons_box {
        display: flex;
        padding: 0 20px;
        justify-content: space-between;
        justify-items: center;
        line-height: 64px;
    }

    .icons_box div {
        width: 50px;
        font-size: 30px;
    }

    .icons_box div:hover {
        border-bottom: 1px solid black;
    }

    @media screen and (max-width: 767px){
        display: flex;
    }
`;

export default Footer;