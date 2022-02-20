import React from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';


const search = () => {
    return (
        <Component>
            <Container>
                <Row>
                    <Col >
                        <h2>Search</h2>
                    </Col >
                    <Col lg={12} className="search" >
                        <input type="text" placeholder="ex: Miami" />
                        <button><i className="fa-solid fa-magnifying-glass"></i></button>
                    </Col>
                </Row>
            </Container>
        </Component>
    );
};



/* STYLE */
const Component = styled.div`

    h2 {
        margin-bottom: 28px;
        font-size: 25px;
        font-weight: 700;
        display: flex;
    }

    .search {

        background-color: white;
        box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.18);

        border: 1px solid;
        border-radius: 20px;
        display: flex;
        overflow: hidden;
        border:none;
        justify-content: space-between;
    }

    input {

        padding-left: 28px;
        border:none;
    }

    input::placeholder {
        font-family: 'Poppins', sans-serif;
        color: #B8B8B8;
        font-size: 25px;
        font-weight: 600;
    }

    button{
        height: 140px;
        width: 45px;
        border-radius: 20px;
        border: none;
        background: linear-gradient(#577ce8, #6ea7f1);
    }

    input:focus {
        outline: none;
    }

    .fa-magnifying-glass { 
        color:white;
        font-size: 18px;
    }

    @media screen and (min-width: 768px) and (max-width: 992px) {
        width: calc((100%/ 12) * 6 - 20px);
        
        .container {
            flex-direction: column;
        }
    }
`;

export default search;
