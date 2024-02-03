import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 20vh;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;

    box-shadow: 0 0 5px #00000050;

    @media (max-width: 480px) {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

`;

export const Navigation = styled.nav`
    width: 60%;

    @media (max-width:480px) {
        width: 100%; 
        display: ${props => props.display};

        margin: 0 auto;

        position: absolute;
        top: 20%;
        right:0;
        bottom: 0;
        left: 0;

        background: #A1AA7F;

        z-index: 999;

        & > ul {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1em;
        }
    }
`;

export const Menu = styled.ul`
    width: 100%;
    height: 100%;

    padding: 1em;

    display: flex;
    justify-content: space-around;

    list-style: none;
`;

export const MenuItem = styled.li`
    font-family: 'Carattere', cursive;
    font-size: 2em;

    color: #A1AA7F;
    
    cursor: pointer;

    @media (max-width: 480px) {
        font-size: 2em;

        padding-top: 2em;
        padding: .2em;

        border-radius: .25em;

        color: #fad4a0;
    }
`;

export const ContactButton = styled.button`
    width: 10%;

    padding: 1em;

    border: 1px solid transparent;
    border-radius: .25em;

    background: #A1AA7F;

    transition: all 300ms ease-in-out;

    outline: 1px solid #A1AA7F;

    cursor: pointer;

    &:hover {
        outline-offset: 5px;
        
        border-color: #A1AA7F;

        background: #A1AA7F50;

        color: #A1AA7F;
    }

    @media (max-width: 480px) {
        display: none;
    }
`;

export const MenuBurguer = styled.button`
    width: fit-content;
    padding: 1em;

    display: none;

    border: 0;
    border-radius: .25em;

    background: #A1AA7F;

    @media (max-width: 480px) {
        display: block;
    }

`;