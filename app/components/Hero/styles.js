import styled from "styled-components";

export const HeroWrapper = styled.div`
    width: 100%;
    height: 100vh;

    background: #5D9EA2;
`;

export const HeroContainer = styled.div`
    width: 100%;
    height: calc(100vh - 20vh);

    display: flex;

`;

export const HeroApresentation = styled.section`
    width: 60%;
    height: 100%;

    padding: 1em;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

`;

export const HeroImage = styled.section`
    width: 40%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeroTitle = styled.h1`
    margin-top: 1em;

    font-family: "Dancing Script", cursive;
    font-optical-sizing: auto;
    font-weight: 400;
    font-size: 6em;

    color: #F4E3B7;

`;


export const HeroSubtitle = styled.h2`
    margin-top: 1em;

    font-family: "Dancing Script", cursive;
    font-optical-sizing: auto;
    font-weight: 400;
    font-size: 2em;

    color: #F4E3B7;
`;

export const HeroButton = styled.button`
    width: 40%;

    margin-top: 2em;
    padding: 1em;

    border: 1px solid transparent;
    border-radius: .25em;

    background: #F8B396;

    font-size: 1.20em;

    cursor: pointer;

    transition: all 300ms ease-in-out;


    &:hover {
        border-color: #F8B396;

        background: #F8B39650;

        color: #F4E3B7;
    }
`;