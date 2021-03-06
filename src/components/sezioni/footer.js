import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {screenFalse, screenSelector }  from '../../redux/sliceScreen'
import styled from 'styled-components';
import { Col} from 'react-bootstrap';


const Footer = () => {

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

    const dispatch = useDispatch();
    const changeFalseScreen = () => {
        dispatch(screenFalse())
    }

    return (
        <Component style = {(size > 768) ? {visibility: 'visible'} : ((!screen) ? {marginTop: '400px'} : {})}>
            <Col sm={12} className="icons_box">
                <div>
                    <i className="fa-solid fa-house" onClick={()=>changeFalseScreen()}></i>
                </div>
                
                <div>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                
                <div>
                    <i className="fa-solid fa-location-dot"></i>
                </div>
            </Col>
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
    box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.18);
    

    .icons_box {
        display: flex;
        padding: 0 20px;
        justify-content: space-between;
        justify-items: center;
        justify-items: center;
    }

    .icons_box div {
        
        width: 60px;
        font-size: 30px;
        line-height: 61px;
    }

    .icons_box div:hover {
        border-bottom: 3px solid black;
    }

    @media screen and (max-width: 767px){
        display: flex;
        margin-top: 0;
        justify-self: end;

        .icons_box {
            width: 100%;
        }
    }
`;

export default Footer;