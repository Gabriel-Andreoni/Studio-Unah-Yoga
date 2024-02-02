import styled from "styled-components";

export const HeroWrapper = styled.div`
    width: 100%;
    height: 100vh;

    background: #A1AA7F;
`;

export const HeroContainer = styled.div`
    width: 100%;
    height: calc(100vh - 20vh);

    display: flex;

    @media (max-width: 480px) {
        flex-direction: column;
    }

`;

export const HeroApresentation = styled.section`
    width: 60%;
    height: 100%;

    padding: 1em;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 480px) {
        width: 100%;

        justify-content: center;
    }

`;

export const HeroImage = styled.section`
    width: 40%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 480px) {
        display: none;
    }
`;

export const HeroTitle = styled.h1`
    margin-top: .3em;

    font-family: 'Carattere', cursive;
    font-optical-sizing: auto;
    font-weight: 400;
    font-size: 8em;


    color: #fad4a0;

    @media (max-width: 480px) {
        margin-top: 0;

        font-size: 3em;
    }

`;


export const HeroSubtitle = styled.h2`
    margin-top: 1em;

    font-family: 'Carattere', cursive;
    font-optical-sizing: auto;
    font-weight: 400;
    font-size: 2.5em;

    color: #fad4a0;

    @media (max-width: 480px) {
        font-size: 1.5em;
    }
`;

export const HeroButton = styled.button`
    width: 40%;

    margin-top: 2em;
    padding: 1em;

    position: relative;

    border: 1px solid transparent;
    border-radius: .25em;

    background: #fad4a0;;

    font-size: 1.20em;

    cursor: pointer;

    transition: all 300ms ease;

    outline: 1px solid #fad4a0;

    &:hover {
        outline-offset: 5px;

        background: #fad4a090;

        color: #fad4a0;
    }

    @media (max-width: 480px) {
        width: 90%;
    }
`;
