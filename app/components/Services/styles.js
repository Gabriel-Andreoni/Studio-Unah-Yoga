import styled from "styled-components";



export const ServicesContainer = styled.section`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;

    background: #f4f4f4;

`;

export const ServicesTitle = styled.h1`
    width: 100%;

    margin-top: .5em;

    font-family: 'Carattere', cursive;
    font-size: 5em;
    font-weight: normal;
    text-align: center;

    color:#a1aa7f;
`;

export const ServicesList = styled.ul`
    width: 100%;
    height: calc(100vh - 10em);

    display: flex;
    justify-content: center;
    gap: 1em;

    margin: 3em auto;

    list-style: none;

`;

export const ServiceListItem = styled.li`
    width: 25%;
    height: 100%;
    
    padding: 1em;

    border-bottom: 10px solid #fad4a0;
    border-radius: 1em;

    background: #a1aa7f;
`;

export const ServiceItemTitle = styled.h2`
    font-family: 'Carattere', cursive;
    font-size: 2em;
    text-align: center;

    color: #FAD4A0;

`;

export const ServiceItemSubtitle = styled.h3`
    margin-top: 1em;

    font-family: 'Carattere', cursive;
    font-size: 1.5em;
    font-weight: normal;
`;

export const ServiceItemText = styled.p`
    padding: 1em;

`;