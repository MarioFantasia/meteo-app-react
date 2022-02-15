import React from 'react';
import styled from 'styled-components';

const localization = () => {
    return (
        <Section>
            <h2>Localization</h2>
            <Box>
                <i class="fa-solid fa-location-dot"></i>
                <h3>Add Localization</h3>
            </Box>
        </Section>
    );
};


const Section = styled.div`
    h2 {
        padding-left: 48px;
        font-size: 30px;
        margin: 0 20px 18px 20px;
    }

`;

const Box = styled.div`
    width: 80%;
    height: 150px;
    background-color: blue;
    margin: 20px auto;
    border-radius: 20px;
    color: white;
    display: flex;
    flex-direction: column;
    padding: 10px;
    text-align: center;
    justify-content: center;

    i {
        font-size:40px;
        margin-bottom: 10px;
    }

    h3 {
        font-size: 30px;
    }
`;



export default localization;