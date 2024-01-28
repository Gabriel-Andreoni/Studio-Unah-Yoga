import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 20vh;

    display: flex;
    justify-content: space-around;
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
    width: 40%;

    @media (max-width:480px) {
        width: 100%; 
        display: ${props => props.display};

        margin: 0 auto;

        position: absolute;
        top: 20%;
        right:0;
        bottom: 0;
        left: 0;

        background: #5D9EA2;

        z-index: 999;

        & > ul {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2em;
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
    font-size: 1.3em;

    color: #F4E3B7;
    
    cursor: pointer;

    @media (max-width: 480px) {
        font-size: 2em;

        padding-top: 2em;
        padding: .2em;

        border-radius: .25em;

        &:hover {
            background: #F4E3B7;
            color: #5D9EA2;
        }
    }
`;

export const ContactButton = styled.button`
    width: 10%;

    padding: 1em;

    border: 1px solid transparent;
    border-radius: .25em;

    background: #F8B396;

    transition: all 300ms ease-in-out;

    outline: 1px solid #F8B396;

    cursor: pointer;

    &:hover {
        outline-offset: 5px;
        
        border-color: #F8B396;

        background: #F8B39650;

        color: #F4E3B7;
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

    background: #F8B396;

    @media (max-width: 480px) {
        display: block;
    }

`;