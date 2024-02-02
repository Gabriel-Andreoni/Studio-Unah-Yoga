import styled from "styled-components";

export const AboutWrapper = styled.div`
    width: 100%;
    height: 80vh;

    padding: 1em;

    display: flex;

    background: #fad4a0;

    @media (max-width: 480px) {
        height: auto;

        flex-direction: column;
    }
`;

export const AboutContent = styled.section`
    width: 50%;
    height: 100%;

    padding: 1em;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 480px) {
        width: 100%;

        order: 1;
    }

`;

export const AboutTitle = styled.h2`
    width: 100%;

    margin-top: 1em;

    font-size: 4em;
    text-align: left;

    position: relative;

    &::after {
        content: '';

        width: 20%;
        height: 5px;

        display: block;

        position: absolute;
        top: 100%;
        left: 0;

        border-radius: .25em;

        background: #A1AA7F;
    }

    @media (max-width: 480px) {
        font-size: 2.5em;
    }
`;

export const AboutText = styled.p`
    margin-top: 2em;

    width: 80%;

`;

export const SocialMediaContainer = styled.span`
    width: 80%;

    padding-top: 3em;

    
    display: flex;
    align-items: flex-start;
    gap: 2em;

`;

export const AboutImage = styled.section`
    width: 50%;
    height: 100%;

    padding: 1em;


    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 480px) {
        width: 100%;

        order: 0;
    }

    & > img {
        width: 300px;
        height: 300px;
    }
`;