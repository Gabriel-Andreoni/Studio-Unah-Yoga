import styled from "styled-components";



export const ServicesContainer = styled.section`
    width: 100%;
    height: 100vh;

    display: flex;

    background: #f4f4f4;

    @media (max-width: 480px) {
        height: auto;

        flex-wrap: wrap;

    }

`;

export const ServicesBigTitle = styled.div`
    width: 50%;
    height: 100%;

    position: relative;

    @media (max-width: 480px) {
        width: 100%;
        height: 70dvh;
    
    }

`;

export const ServicesImage = styled.img`
    position: absolute;
    top: 25%;
    inset: 0;

    margin: 0 auto;

    @media (max-width: 480px) {
        width: 200px;
    }
`;

export const ServicesTitle = styled.h1`
    width: 100%;

    margin-top: .3em;

    font-family: 'Carattere', cursive;
    font-size: 10em;
    font-weight: normal;
    text-align: center;

    color:#a1aa7f;

    @media (max-width: 480px) {
        font-size: 6em;
    }
`;

export const ServicesContent = styled.div`
    width: 50%;
    height: 100%;

    display: flex;

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const ServicesList = styled.ul`
    width: 100%;
    height: 100%;

    padding: 2em;

    display: flex;
    flex-wrap: wrap;
    gap: 2em;

    list-style: none;

    overflow-y: scroll;

    @media (max-width: 480px) {
        height: auto;

        margin-bottom: 2em;

        overflow-y: unset;
    }

`;

export const ServiceListItem = styled.li`
    width: 100%;
    height: 50%;
    
    padding: 2em;

    border-bottom: 10px solid #fad4a0;
    border-radius: 1em;

    background: #a1aa7f80;

    transition: all 300ms ease;

    position: relative;

    overflow: hidden;

    &:hover {
        translate: 0 -5%;

        border-color: #a1aa7f;

        box-shadow: 0 10px 20px #a1aa7f50;
    }

    @media (max-width: 480px) {
        height: fit-content;
    }
`;

export const ServiceItemTitle = styled.h2`
    font-family: 'Carattere', cursive;
    font-size: 2.5em;
    text-align: center;

    color: #a1aa7f;

`;

export const ServiceItemSubtitle = styled.h3`
    margin-top: 1em;

    font-family: 'Carattere', cursive;
    font-size: 2em;
    font-weight: normal;
`;

export const ServiceItemText = styled.p`
    padding: 1em;

    font-size: 1.1em;

`;