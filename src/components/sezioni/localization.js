import React from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';


const localization = () => {
    return (
        <Component>
            <Container>
                <Row>
                    <Col>
                        <h2>Localization</h2>
                    </Col>
                    <Col lg={12}>
                        <div className="gps">
                            <i className="fa-solid fa-location-dot"></i>
                            <h3>Add Localization</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Component>
    );
};

const Component = styled.div`
    
    .row {
        margin-top: 39px;
    }
    
    h2 {
        margin-bottom: 28px;
        font-size: 25px;
        font-weight: 700;
    }

    .gps {
        height: 140px;
        background: linear-gradient(#5679E8, #6FA5EA);
        border-radius: 20px;
        color: white;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.18);

    }

    i {
        font-size: 30px;
    }

    @media screen and (min-width: 768px) and (max-width: 992px) {
        width: calc((100%/ 12) * 6 - 20px);
        
        .container {
            flex-direction: column;
        }

        .row {
            margin: 0;
        }
    }
`;

export default localization;
