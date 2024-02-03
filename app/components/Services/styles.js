import styled from "styled-components";



export const ServicesContainer = styled.section`
    width: 100%;
    height: 100vh;

    padding: 1em;

    display: flex;
    flex-direction: column;

    background: lightsalmon;

`;

export const ServicesTitle = styled.h1`
    width: 100%;

    margin-top: 2em;

    text-align: center;
`;

export const ServicesList = styled.ul`
    width: 100%;
    height: calc(100vh - 10em);

    display: flex;
    gap: 2em;


    margin: 2em auto;
    padding: 2em;

    list-style: none;

    background: lightyellow;

`;

export const ServiceListItem = styled.li`
    width: 33%;
    
    padding: 1em;

    border-bottom: 10px solid darkblue;
    border-radius: 1em;

    background: lightblue;


`;

export const ServiceItemTitle = styled.h2`
    text-align: center;

`;

export const ServiceItemSubtitle = styled.h3`
    margin-top: 1em;
`;

export const ServiceItemText = styled.p`
    padding: 1em;

`;