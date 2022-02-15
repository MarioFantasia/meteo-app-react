import React from 'react';
import styled from 'styled-components';

const search = () => {
    return (
        <Section>
            <h2>Search</h2>
            <Box >
                <div className="search">
                    <input type="text" placeholder="ex: Miami" />
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </Box >
        </Section>
    );
};

/* section */
const Section = styled.div`
    h2 {
        padding-left: 48px;
        font-size: 30px;
        margin: 0 20px 18px 20px;
        display: flex;
    }

`;

/* Box  */
const Box = styled.div`
    width: 79%;
    margin: 0 auto;
    background-color: white;
    border-radius: 20px;
    box-shadow: 6px 4px 16px 1px rgba(0,0,0,0.45);


    .search {
        border: 1px solid;
        border-radius: 20px;
        display: flex;
        margin: 17px auto;
        overflow: hidden;
        border:none;
    }

    input {
        width: 75%;
        margin: 0 auto;
        height: 150px;
        border:none;
        font-size: 40px;
    }

    input::placeholder {
        color: lightgrey;
        font-size: 30px;
        padding-left: 20px;
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
    }

    button{
        height: 150px;
        width: 60px;
        border-radius: 20px;
        border: none;
        background: linear-gradient(#577ce8, #6ea7f1);
    }

    input:focus {
        outline: none;
    }

    .fa-magnifying-glass { 
        color:white;
        font-size: 25px;
    }

`;




export default search;